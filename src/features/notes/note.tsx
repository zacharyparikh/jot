import { useAppDispatch } from 'lib/hooks'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import {
  addNote,
  selectCurrentNote,
  setNoteText,
  setNoteTitle,
} from './notes-slice'

export function Note() {
  const note = useSelector(selectCurrentNote)
  const dispatch = useAppDispatch()
  const { title = '', text = '' } = note ?? {}

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value
    if (!note) {
      dispatch(addNote({ title: newTitle, text }))
      return
    }
    dispatch(setNoteTitle(newTitle))
  }

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value
    if (!note) {
      dispatch(addNote({ title: newText.slice(0, 10), text: newText }))
      return
    }
    dispatch(setNoteText(newText))
  }

  return (
    <div className="flex-grow flex flex-col gap-2">
      <input
        type="text"
        className="p-2 border border-black"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        id="note"
        className="flex-grow p-2 border border-black resize-none"
        value={text}
        onChange={handleTextChange}
      />
    </div>
  )
}
