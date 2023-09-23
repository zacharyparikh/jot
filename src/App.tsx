import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { AddNoteForm } from './features/notes/AddNoteForm';
import { NotesList } from './features/notes/NotesList';
import { Note } from './features/notes/Note';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <AddNoteForm />
            <NotesList />
          </>
        ),
      },
      {
        path: '/notes/:noteId',
        element: <Note />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
