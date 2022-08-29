import {configureStore, combineReducers} from '@reduxjs/toolkit';
import contactReducer from './ContactStore';

const rootReducer = combineReducers({
  contactReducer: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
