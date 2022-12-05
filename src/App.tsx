import { Routes, Route, Navigate } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import { usePostFetch } from './hooks/usePostFetch';

import { WelcomeHeader } from './components/WelcomeHeader';
import { BlogList } from './components/BlogList';
import { PostPage } from './components/PostPage';
import { TitleRow } from './components/TitleRow';

import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { contentContainer } from './styles/App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();

  const [posts, error, loading] = usePostFetch();

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <TitleRow isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <div className={contentContainer}>
              <WelcomeHeader />
              <BlogList posts={posts} loading={loading} error={error} />
            </div>
          }
        />
        <Route
          path="/:blogId"
          // element={<PostPage post={post} loading={loading} />}
          element={<PostPage posts={posts} loading={loading} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
