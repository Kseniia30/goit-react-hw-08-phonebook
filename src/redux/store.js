import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authorization/slice'
import { contactsSlice, filterSlice } from "./slice"
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';

const usersPersistConfig = {
    key: 'users',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        "users": persistReducer(usersPersistConfig, authSlice.reducer),
        "contacts": contactsSlice.reducer,
        "filter": filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['contacts/addContact/fulfilled', 'persist/PERSIST'],
                ignoredActionPaths: ['all', 'application/json'],
                ignoredPaths: ['application/json'],
            },
        })
})

export const persistor = persistStore(store)
