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
    return (
      <ul>
        <li>Note 1</li>
        <li>Note 2</li>
      </ul>
    )
  }

  return (
    <div
      className={`flex flex-col items-center p-2 bg-gray-900 text-zinc-100 ${
        open ? 'w-24' : 'w-6'
      }`}
    >
      <button
        type="button"
        className={`${open && 'self-end'}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? 'X' : '>'}
      </button>
      {open && <div>{getContent()}</div>}
    </div>
  )
}
