import { useState } from 'react';
import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { button, badge, themeToggle } from './styles/style.css';
import { stack, row } from './styles/recipes.css';
import {
  appContainer,
  contentContainer,
  corner,
  welcomeScreen,
  welcomeImage,
  titleRow,
  pageTitle,
  pageSubtitle,
  scrollPrompt,
  main,
  pageElements,
} from './styles/App.css';
import { useDarkMode } from './hooks/useDarkMode';

import { BlogItem } from './components/BlogItem';
import testing from './assets/testing.jpg';

import { Form } from './components/Form';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();

  return (
    <div
      id="app"
      className={[isDarkTheme ? darkTheme : lightTheme, appContainer].join(
        ' '
      )}>
      <div className={contentContainer}>
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

        <main
          id="main"
          className={[main, stack({ gap: 'md', align: 'center' })].join(' ')}>
          <h1>Welcome to our Favourite Worlds!</h1>
          <p>
            Here we blog about some of our favourite video game worlds and what
            we love about them. Learn more <a href="">about us</a>, or continue
            on <a href="#posts">to the blog posts</a>.
          </p>

          <div className={badge} style={{ width: 'min(80vw, 40rem)' }}>
            <p>
              Right now this page also contains some general page elements to
              play around with{' '}
              <a href="https://vanilla-extract.style/"> Vanilla Extract</a>{' '}
              themeing.
            </p>
          </div>

          <section id="posts">{/* <BlogItem image={testing} /> */}</section>

          <section className={pageElements}>
            <h2>Page Elements to Style</h2>
            <div className={stack({ gap: 'lg' })}>
              <div>
                <h3>Stacks and Buttons</h3>
                <p>
                  The container for this section is a stack with gap set to "lg"
                </p>
              </div>

              <div className={stack()}>
                <p>
                  This stack has gap default settings so gap "sm" and align
                  "stretch".
                </p>
                <button className={button.primary}>Primary button</button>
              </div>
              <div className={stack({ gap: 'md', align: 'center' })}>
                <p>This stack has gap "md".</p>
                <p>
                  This stack also has "centered: true" applied. Note how the
                  button doesn't stretch to fill the container.
                </p>
                <button className={button.filled}>Filled button</button>
              </div>
              <div className={stack({ gap: 'xs', align: 'end' })}>
                <p>
                  This stack has gap "xs" and align: "end". I'll supply some
                  extra text so that alignment becomes visible.
                </p>
                <button className={button.animated}>Animated button</button>
              </div>
            </div>
            <h3 id="form">Some form styling</h3>
            <Form />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
