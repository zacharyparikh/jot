import { useGetNotesQuery } from 'features/api/api-slice'
import { appConsole } from 'lib/app-console'
import { useAppDispatch } from 'lib/hooks'
import { onAcceptKeys } from 'lib/on-accept-keys'
import { useState } from 'react'
import type { Note } from './notes-slice'
import { switchNote } from './notes-slice'

export function NotesSidebar(): JSX.Element {
  const { data: notes, isError, error } = useGetNotesQuery()
  const [open, setOpen] = useState(true)
  const dispatch = useAppDispatch()
  const handleSwitchNote = (id: number): void => {
    dispatch(switchNote(id))
  }

  const getContent = function getNotesSidebarContent(): JSX.Element {
    if (isError) {
      appConsole.error(error)
      return <div>No notes found</div>
    }

    if (notes !== undefined) {
      return (
        <ul>
          {Object.values(notes).map((note: Note) => (
            <li key={note.id}>
              <button
                type="button"
                onClick={() => {
                  handleSwitchNote(note.id)
                }}
                onKeyDown={onAcceptKeys(() => {
                  handleSwitchNote(note.id)
                })}
              >
                {note.title}
              </button>
            </li>
          ))}
        </ul>
      )
    }

    return <div>Loading...</div>
  }

  return (
    <div
      className={`flex flex-col items-center p-2 bg-gray-900 text-zinc-100 ${
        open ? 'w-24' : 'w-6'
      }`}
    >
      <button
        type="button"
        className={open ? 'self-end' : ''}
        onClick={() => {
          setOpen((prev) => !prev)
        }}
      >
        {open ? 'X' : '>'}
      </button>
      {open && getContent()}
    </div>
  )
}
