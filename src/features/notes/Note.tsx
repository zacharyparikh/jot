import { useSelector } from 'react-redux'
import { selectCurrentNote } from './notesSlice'

export function Note() {
  const note = useSelector(selectCurrentNote)

  if (!note) {
    return null
  }

  const { title, text } = note

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="note">{title}</label>
      <textarea id="note" className="resize-none">
        {text}
      </textarea>
    </div>
  )
}
