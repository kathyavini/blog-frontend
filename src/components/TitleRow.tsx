import { useLocation } from 'react-router-dom';
import { themeToggle } from '../styles/style.css';
import { homepage, post, titleHome, titlePost } from './TitleRow.css';

interface TitleRowProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TitleRow = ({ setIsDarkTheme, isDarkTheme }: TitleRowProps) => {
  const { pathname } = useLocation();

  return (
    <header className={pathname == '/' ? homepage : post}>
      <h1 className={pathname == '/' ? titleHome : titlePost}>
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
    </header>
  );
};
