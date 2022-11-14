import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice, filterSlice} from "./slice"

export const store = configureStore({
    reducer: {
        "contacts": contactsSlice.reducer,
        "filter": filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['contacts/addContact/fulfilled'],
                ignoredActionPaths: ['all', 'application/json'],
                ignoredPaths: ['application/json'],
            },
        })
})

