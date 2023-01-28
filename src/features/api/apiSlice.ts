import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Note } from '../notes/notesSlice'

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Note'],
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getNotes: builder.query<{ [index: number]: Note }, void>({
      query: () => '/notes',
      providesTags: (result = []) => [
        { type: 'Note', id: 'LIST' },
        ...Object.values(result).map(({ id }) => ({
          type: 'Note' as const,
          id,
        })),
      ],
    }),
    addNote: builder.mutation<any, void>({
      query: () => '',
      invalidatesTags: [{ type: 'Note', id: 'LIST' }],
    }),
    deleteNote: builder.mutation<number, number>({
      query: (id) => ({
        url: `/notes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Note', id: 'LIST' }],
    }),
    updateNote: builder.mutation<Note, Note>({
      query: ({ id, text, title }) => ({
        url: `/notes/${id}`,
        method: 'PUT',
        body: { text, title },
      }),
      async onQueryStarted({ id, text, title }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getNotes', undefined, (posts) => {
            const post = posts[id]
            if (post) {
              post.title = title
              post.text = text
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Note', id }],
    }),
  }),
})

export const { useGetNotesQuery, useAddNoteMutation, useUpdateNoteMutation } =
  apiSlice
