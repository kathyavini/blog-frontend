import { button } from '../styles/style.css';
import { stack } from '../styles/recipes.css';
import {
  welcomeContainer,
  welcomeScreen,
  welcomeImage,
  scrollPrompt,
  message,
} from './WelcomeHeader.css';
import { TitleRow } from './TitleRow';

export interface HeaderProps {
  isDarkTheme: Boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
export const WelcomeHeader = ({ setIsDarkTheme, isDarkTheme }: HeaderProps) => {
  return (
    <>
      <header className={welcomeScreen}>
        {/* <TitleRow setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} /> */}
        <div className={welcomeImage}>
          <a href="#message">
            <button className={[button.filled, scrollPrompt].join(' ')}>
              Enter
            </button>
          </a>
        </div>
      </header>
      <section
        id="message"
        className={[message, stack({ gap: 'md', align: 'center' })].join(' ')}>
        <h1>Welcome to our Favourite Worlds!</h1>
        <p>
          Once the API and the two frontends (authoring + viewing) are
          completed, this will be the home of our blog "Our Favourite Worlds."
          For now you can continue on to the{' '}
          <a href="#posts">filler blog posts</a> but watch this space for
          updates!
        </p>
      </section>
    </>
  );
};
