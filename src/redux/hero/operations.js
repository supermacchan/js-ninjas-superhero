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




export const operations = {
    getAllHeroes,
    // createHero,
    // updateHero,
    // deleteHero
}