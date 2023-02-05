import { Note } from 'features/notes/note'
import { NotesSidebar } from 'features/notes/notes-sidebar'

export default function Home(): JSX.Element {
  return (
    <div className="bg-zinc-100 h-screen grid grid-cols-12">
      <NotesSidebar />
      <div className="col-span-11 mr-4 py-4 h-full flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-2xl text-gray-800">Jot</div>
          <button
            type="button"
            className="bg-blue-600 text-zinc-100 px-5 py-3 rounded-md"
          >
            Add Note
          </button>
        </div>
        <Note />
      </div>
    </div>
  )
}
