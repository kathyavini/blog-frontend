import { Link } from 'react-router-dom';
import { errorContainer } from './Resource404.css';

export const Resource404 = ({ resource }: { resource: string }) => {
  return (
    <div className={errorContainer}>
      <h1>404</h1>
      <h2>{resource} Not Found</h2>
      <Link to="/">Return to home page</Link>
    </div>
  );
};
