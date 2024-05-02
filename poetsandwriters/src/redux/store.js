import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import { useReducer } from "react";

export default store = configureStore({
    reducer: {
        user: useReducer,
        
    },
})