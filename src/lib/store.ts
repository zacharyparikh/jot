import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/api-slice'
import { notesSlice } from '../features/notes/notes-slice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [notesSlice.name]: notesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
