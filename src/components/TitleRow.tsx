import { Link, useLocation } from 'react-router-dom';
import { themeToggle } from '../styles/style.css';
import { titleRow, pageTitle } from './TitleRow.css';
import { HeaderProps } from './WelcomeHeader';

export const TitleRow = ({ setIsDarkTheme, isDarkTheme }: HeaderProps) => {
  const { pathname } = useLocation();

  return (
    <div className={titleRow}>
      <h1
        className={pageTitle}
        style={
          pathname == '/' ? { visibility: 'visible' } : { visibility: 'hidden' }
        }>
        Our Favourite Worlds
      </h1>
      <button
        className={themeToggle}
        style={pathname == '/' ? {} : { color: 'white' }}
        onClick={() => setIsDarkTheme((prev) => !prev)}>
        {isDarkTheme ? (
          <>
            <span className="material-icons">dark_mode</span>Mode
          </>
        ) : (
          <>
            <span className="material-icons">light_mode</span>Mode
          </>
        )}
      </button>
    </div>
  );
};
