import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

type Note = { id: string; title: string; content: string };
type SliceState = Note[];

const initialState: SliceState = [
  { id: '1', title: 'First Note!', content: 'Hello!' },
  { id: '2', title: 'Second Note', content: 'More text' },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: {
      reducer(state, action: PayloadAction<Note>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    noteUpdated(
      state,
      action: PayloadAction<{ id: string; title: string; content: string }>
    ) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { noteAdded, noteUpdated } = notesSlice.actions;

export default notesSlice.reducer;
