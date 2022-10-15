import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { apiSlice } from '../features/api/apiSlice'
import { notesSlice } from '../features/notes/notesSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [notesSlice.name]: notesSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
