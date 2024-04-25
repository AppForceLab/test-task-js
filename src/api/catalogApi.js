import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6627bcc5b625bf088c098b82.mockapi.io/api/v1/';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/campers', {
        params: { page, limit: 4 },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
