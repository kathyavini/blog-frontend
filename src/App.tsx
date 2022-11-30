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
            Here we blog about some of our favourite video game worlds and what
            we love about them. Learn more <a href="">about us</a>, or continue
            on <a href="#posts">to the blog posts</a>.
          </p>

          <BlogList />
        </main>
      </div>
    </div>
  );
}

export default App;
