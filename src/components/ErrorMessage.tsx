import { Link } from 'react-router-dom';
import { errorContainer } from './errorMessage.css';

export const ErrorMessage = () => {
  return (
    <div className={errorContainer}>
      <h1>404</h1>
      <h2>Post Not Found</h2>
      <Link to="/">Return to home page</Link>
    </div>
  );
};
