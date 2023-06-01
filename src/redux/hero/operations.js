import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});


const getAllHeroes = createAsyncThunk(
    'hero/fetchAll',
    async (page = 1, thunkAPI) => {
        try {
            const { data } = await instance.get(`/heroes/?page=${page}`);
            console.log(data);
            return data;
        } catch (err) {
            toast.error(err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const createHero = createAsyncThunk(
    'hero/createNew',
    async (newInfo, thunkAPI) => {
        try {
            const { data } = await instance.post('/heroes', newInfo, 
            // {
            //     headers: {
            //         'Content-type': 'multipart/form-data',
            //     },
            // }
            );
            console.log('SUCCESS');
            toast.success('A new Hero has just been enlisted!')
            return data;
        } catch (err) {
            toast.error(err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const updateHero = createAsyncThunk(
    'hero/update',
    async ({id, newInfo}, thunkAPI) => {
        console.log(id);
        try {
            const { data } = await instance.put(`/heroes/${id}`, newInfo, 
            // {
            //     headers: {
            //         'Content-type': 'multipart/form-data',
            //     },
            // }
            );
            console.log('UPDATE SUCCESS');
            toast.success('You have successfully updated the info!')
            return data;
        } catch (err) {
            toast.error(err.message);
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

const deleteHero = createAsyncThunk(
    'hero/delete',
    async (id, thunkAPI) => {
        console.log(id);
        try {
            const { data } = await instance.delete(`/heroes/${id}`);
            console.log('DELETED');
            toast.success('As per your request, a hero has fallen!')
            return data;
        } catch (err) {
            toast.error(err.message);
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