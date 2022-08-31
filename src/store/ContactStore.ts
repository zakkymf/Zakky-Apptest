import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';
import API from '../config/API';

interface ContactState {
  loading: boolean;
  data: any;
  firstName: string;
  lastName: string;
  age: string;
  photo: string;
  contact: any;
  fecthDetail: boolean;
}

const initialState: ContactState = {
  data: null,
  loading: false,
  firstName: '',
  lastName: '',
  age: '',
  photo: '',
  contact: null,
  fecthDetail: false,
};

export const getContact = createAsyncThunk('getContact', async () => {
  const response = await axios.get(API.getContact);
  if (response?.status === 200) {
    return response?.data?.data;
  } else {
    Alert.alert('Oops', response?.data?.message);
  }
});

export const saveContact = createAsyncThunk(
  'addContact',
  async (params: any) => {
    const data = {
      firstName: params?.firstName,
      lastName: params?.lastName,
      age: Number(params?.age),
      photo: params?.photo,
    };
    const response = await axios.post(API.getContact, data);
    try {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Success create contact',
      });
      params.navigation?.navigate('ContactScreen');
      return response?.data?.data;
    } catch (error: any) {
      Alert.alert('Oops', error?.message);
    }
  },
);

export const getContactById = createAsyncThunk(
  'getContactById',
  async (contactId: string) => {
    try {
      const response = await axios.get(`${API.getContact}/${contactId}`);
      return response?.data?.data;
    } catch (error: any) {
      Alert.alert('Oops', error?.message);
    }
  },
);

export const deleteContactById = createAsyncThunk(
  'deleteContactById',
  async (params: any) => {
    try {
      const response = await axios.delete(`${API.getContact}/${params?.id}`);
      return response?.data?.data;
    } catch (error: any) {
      Alert.alert('Oops', error?.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  'deleteContactById',
  async (params: any) => {
    const data = {
      firstName: params?.firstName,
      lastName: params?.lastName,
      age: Number(params?.age),
      photo: params?.photo,
    };
    try {
      const response = await axios.put(`${API.getContact}/${params?.id}`, data);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Success update contact',
      });
      params.navigation.navigate('ContactScreen');
      return response?.data?.data;
    } catch (error: any) {
      Alert.alert('Terjadi Kesalahan', error?.message);
    }
  },
);

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState: initialState,
  reducers: {
    reset: state => {
      state.firstName = '';
      state.lastName = '';
      state.age = '';
      state.photo = '';
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setPhoto: (state, action) => {
      state.photo = action.payload;
    },
  },
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

    builder.addCase(saveContact.fulfilled, state => {
      state.loading = false;
    });

    builder.addCase(getContactById.pending, state => {
      state.fecthDetail = true;
    });
    builder.addCase(getContactById.fulfilled, (state, action) => {
      state.contact = action.payload;
      state.fecthDetail = false;
    });
    builder.addCase(getContactById.rejected, state => {
      state.fecthDetail = false;
    });

    builder.addCase(deleteContactById.fulfilled, state => {
      state.loading = false;
    });
  },
});

export const {setFirstName, setLastName, setAge, setPhoto, reset} =
  contactSlice.actions;

export default contactSlice.reducer;
