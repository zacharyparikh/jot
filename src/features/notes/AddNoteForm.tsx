import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { noteAdded } from './notesSlice';

export const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useAppDispatch();

  const onSaveNoteClicked = () => {
    if (title && content) {
      dispatch(noteAdded(title, content));

      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Add a New Note</h2>
      <form>
        <label htmlFor="noteTitle">Note Title:</label>
        <input
          type="text"
          id="noteTitle"
          name="noteTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="noteContent">Content:</label>
        <textarea
          id="noteContent"
          name="noteContent"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="button" onClick={onSaveNoteClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
