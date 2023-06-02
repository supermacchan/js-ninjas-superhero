import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://superhero-backend.onrender.com/api',
});

// =========== fetch all heroes (with pagination) ============
const getAllHeroes = createAsyncThunk(
    'hero/fetchAll',
    async (page = 1, thunkAPI) => {
        try {
            const { data } = await instance.get(`/heroes/?page=${page}`);

            if (data.data.length < 5) {
                toast.info("All heroes are already here!");
            }

            return data;
        } catch (err) {
            toast.error("Oh no! Something went wrong...");
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

// =========== add new hero ============
const createHero = createAsyncThunk(
    'hero/createNew',
    async (newInfo, thunkAPI) => {
        try {
            const { data } = await instance.post('/heroes', newInfo, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            toast.success("A new Hero has just been enlisted!");
            return data;
        } catch (err) {
            toast.error("Oh no! Something went wrong...");
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

// =========== update hero info ============
const updateHero = createAsyncThunk(
    'hero/update',
    async ({id, newInfo}, thunkAPI) => {
        try {
            const { data } = await instance.put(`/heroes/${id}`, newInfo, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });
            toast.success("You have successfully updated the info!");
            return data;
        } catch (err) {
            toast.error("Oh no! Something went wrong...");
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

// =========== delete hero ============
const deleteHero = createAsyncThunk(
    'hero/delete',
    async (id, thunkAPI) => {
        try {
            const { data } = await instance.delete(`/heroes/${id}`);
            toast.success("You have just killed a hero...");
            return data;
        } catch (err) {
            toast.error("Oh no! Something went wrong...");
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const operations = {
    getAllHeroes,
    createHero,
    updateHero,
    deleteHero
}