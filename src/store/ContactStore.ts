import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Alert} from 'react-native';
import API from '../config/API';

interface ContactState {
  loading: boolean;
  data: any;
}

const initialState: ContactState = {
  data: null,
  loading: false,
};

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getContact.pending, state => {
      state.loading = true;
    });
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getContact.rejected, state => {
      state.loading = false;
    });
  },
});

export const getContact = createAsyncThunk('getContact', async () => {
  const response = await axios.get(API.getContact);
  if (response?.status === 200) {
    return response?.data?.data;
  } else {
    Alert.alert('Terjadi Kesalahan', response?.data?.message);
  }
});

export default contactSlice.reducer;
