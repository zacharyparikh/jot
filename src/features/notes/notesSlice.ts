import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'

export interface Note {
  id: number
  title: string
  text: string
}

interface SliceState {
  current?: number
  notes: { [index: number]: Note }
}

const initialState: SliceState = {
  current: undefined,
  notes: {},
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    switchNote(state, action: PayloadAction<number>) {
      state.current = action.payload
    },
    addNote(state, action: PayloadAction<Note>) {
      const { id, title, text } = action.payload
      state.notes[id] = { id, title, text }
    },
  },
})

const { name, actions } = notesSlice
export const selectCurrentNote = (state: RootState) => {
  const slice = state[name]
  const id = slice.current
  return id !== undefined ? slice.notes[id] : null
}
export const { switchNote } = actions
