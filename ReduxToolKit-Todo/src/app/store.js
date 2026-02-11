import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/toDoSlice';

export const Store = configureStore({
    reducer: todoReducer
})