import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Note } from '../notes/notesSlice'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getNotes: builder.query<Note[], void>({
      query: () => 'notes',
    }),
    addNote: builder.mutation<any, void>({
      query: () => '',
    }),
  }),
})

export const { useGetNotesQuery, useAddNoteMutation } = apiSlice
