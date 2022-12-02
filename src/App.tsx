import './styles/global.css';

import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './styles/theme.css';
import { stack } from './styles/recipes.css';
import { appContainer, contentContainer, main } from './styles/App.css';

import { WelcomeHeader } from './components/WelcomeHeader';
import { BlogList } from './components/BlogList';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();

  return (
    <div
      id="app"
      className={[isDarkTheme ? darkTheme : lightTheme, appContainer].join(
        ' '
      )}>
      <div className={contentContainer}>
        <WelcomeHeader
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />

        <main
          id="main"
          className={[main, stack({ gap: 'md', align: 'center' })].join(' ')}>
          <h1>Welcome to our Favourite Worlds!</h1>
          <p>
            Once the API and the two frontends (authoring + viewing) are
            completed, this will be the home of our blog "Our Favourite Worlds."
            For now you can continue on to the{' '}
            <a href="#posts">filler blog posts</a> but watch this space for
            updates!
          </p>

          <BlogList />
        </main>
      </div>
    </div>
  );
}

export default App;
