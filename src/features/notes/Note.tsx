import { useAppDispatch } from 'app/store'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import {
  addNote,
  selectCurrentNote,
  setNoteText,
  setNoteTitle,
} from './notesSlice'

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
    <div className="flex flex-col gap-2 flex-grow">
      <input
        type="text"
        className="border border-black"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        id="note"
        className="resize-none border border-black flex-grow"
        value={text}
        onChange={handleTextChange}
      />
    </div>
  )
}
