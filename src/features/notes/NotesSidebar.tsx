import { useState } from 'react'
import { useGetNotesQuery } from '../api/apiSlice'
import { Note } from './notesSlice'

export function NotesSidebar() {
  const [open, setOpen] = useState(true)
  const { isLoading, isSuccess, data: notes } = useGetNotesQuery()
  const getContent = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (isSuccess) {
      return notes.map((note: Note) => <div key={note.id}>{note.title}</div>)
    }
    return null
  }

  return (
    <div className={`fixed h-full ${open ? 'w-20' : 'w-5'}`}>
      <button
        type="button"
        className="absolute right-1"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? 'X' : '>'}
      </button>
      {open && getContent()}
    </div>
  )
}
