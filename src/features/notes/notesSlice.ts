import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'lib/store'

export interface Note {
  id: number
  title: string
  text: string
}

interface SliceState {
  current?: number
  notes: { [index: number]: Note }
}

let id = 0

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
    addNote(state, action: PayloadAction<{ title: string; text: string }>) {
      const { title, text } = action.payload
      state.notes[id] = { id, title, text }
      state.current = id
      id += 1
    },
    deleteNote(state, action: PayloadAction<number>) {
      delete state.notes[action.payload]
    },
    setNoteTitle(state, action: PayloadAction<string>) {
      if (state.current === undefined) {
        return
      }
      state.notes[state.current].title = action.payload
    },
    setNoteText(state, action: PayloadAction<string>) {
      if (state.current === undefined) {
        return
      }
      state.notes[state.current].text = action.payload
    },
  },
})

const { name, actions } = notesSlice
export const selectCurrentNote = (state: RootState) => {
  const { current, notes } = state[name]
  return current !== undefined ? notes[current] : null
}
export const { switchNote, addNote, setNoteTitle, setNoteText } = actions
