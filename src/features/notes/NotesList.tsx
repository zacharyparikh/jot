import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useGetGreetingQuery } from '../api/apiSlice';
import { Spinner } from '../../components/Spinner';

export const NotesList = () => {
  const notes = useAppSelector((state) => state.notes);
  const {
    data: greeting,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGreetingQuery();

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = greeting.content;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  const renderedNotes = notes.map((note) => (
    <article className="post-excerpt" key={note.id}>
      <h3>{note.title}</h3>
      <p className="note-content">{note.content.substring(0, 100)}</p>
      <Link to={`/notes/${note.id}`} className="button muted-button">
        View Note
      </Link>
    </article>
  ));

  return (
    <section className="notes-list">
      <h2>Notes</h2>
      {content}
      {renderedNotes}
    </section>
  );
};
