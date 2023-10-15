import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/api-slice';
import notesReducer from '../features/notes/notes-slice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
