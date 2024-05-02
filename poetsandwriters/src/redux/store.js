import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import { useReducer } from "react";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { version } from "mongoose";
import persistStore from "redux-persist/es/persistStore";

const rootReducer= combineReducers({
    user: userReducer,
});

const persistConfig= {
    key: 'root',
    storage,
    version: 1,
};
const persistedReducer= persistReducer(persistConfig);

export default store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor= persistStore(store);