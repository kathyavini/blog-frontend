import { button, themeToggle } from '../styles/style.css';
import {
  welcomeScreen,
  welcomeImage,
  titleRow,
  pageTitle,
  scrollPrompt,
} from './WelcomeHeader.css';

interface HeaderProps {
  isDarkTheme: Boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
export const WelcomeHeader = ({ setIsDarkTheme, isDarkTheme }: HeaderProps) => {
  return (
    <header className={welcomeScreen}>
      <div className={titleRow}>
        <h1 className={pageTitle}>Our Favourite Worlds</h1>
        <button
          className={[themeToggle].join(' ')}
          onClick={() => setIsDarkTheme((prev) => !prev)}>
          {isDarkTheme ? (
            <>
              <span className="material-icons">light_mode</span>Mode
            </>
          ) : (
            <>
              <span className="material-icons">dark_mode</span>Mode
            </>
          )}
        </button>
      </div>
      <div className={welcomeImage}>
        <a href="#main">
          <button className={[button.filled, scrollPrompt].join(' ')}>
            Enter
          </button>
        </a>
      </div>
    </header>
  );
};
