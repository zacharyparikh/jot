import { Note } from 'features/notes/Note'
import { NotesSidebar } from 'features/notes/NotesSidebar'

export default function Home() {
  return (
    <div className="my-4">
      <NotesSidebar />
      <div className="ml-24 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-2xl text-gray-800">Jot</div>
          <button
            type="button"
            className="mr-20 bg-blue-600 px-5 py-3 rounded-md"
          >
            Add Note
          </button>
        </div>
        <Note />
      </div>
    </div>
  )
}
