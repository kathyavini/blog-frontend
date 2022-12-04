import { useState, useEffect } from 'react';
import axios from './config/axios';
import { Routes, Route, useMatch, Navigate } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';

import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { contentContainer } from './styles/App.css';

import { WelcomeHeader } from './components/WelcomeHeader';
import { BlogList } from './components/BlogList';
import { PostPage } from './components/PostPage';
import { TitleRow } from './components/TitleRow';

export interface Post {
  author: { displayName: string };
  body: string;
  created_at: string;
  slug: string;
  title: string;
  url: string;
  id: string;
  image_cloud_url: string;
  image_cloud_id: string;
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useDarkMode();
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const match = useMatch(':blogId');
  const post = match
    ? posts.find((post) => post.slug === match.params.blogId)
    : null;

  useEffect(() => {
    setLoading(true);
    axios
      .get('/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      })
      .finally(() => {});
  }, []);

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <TitleRow isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <div className={contentContainer}>
              <WelcomeHeader
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
              />
              <BlogList posts={posts} loading={loading} error={error} />
            </div>
          }
        />
        <Route //
          path="/:blogId"
          element={<PostPage post={post} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
