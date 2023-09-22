import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { PostsList } from './features/posts/PostsList';
import { Navbar } from './app/Navbar';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';
import { AddNoteForm } from './features/notes/AddNoteForm';
import { NotesList } from './features/notes/NotesList';

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
        path: '/posts',
        element: (
          <>
            <AddPostForm />
            <PostsList />,
          </>
        ),
      },
      {
        path: '/posts/:postId',
        element: <SinglePostPage />,
      },
      {
        path: '/editPost/:postId',
        element: <EditPostForm />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
