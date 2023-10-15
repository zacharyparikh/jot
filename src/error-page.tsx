import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let message: string;

  if (typeof error === 'object') {
    if ('statusText' in error && typeof error.statusText === 'string') {
      message = error.statusText;
    } else if ('message' in error && typeof error.message === 'string') {
      message = error.message;
    }
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}
