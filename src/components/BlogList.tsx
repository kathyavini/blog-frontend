import { useState, useEffect } from 'react';
import axios from '../config/axios';
import { HashLoader } from 'react-spinners';
import { BlogItem } from './BlogItem';
import { Post } from './BlogItem';

import { stack } from '../styles/recipes.css';
import { postList } from './BlogList.css';

export const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/posts')
      .then((response) => {
        // console.log(response.data);
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

  const allPosts = posts.map((post) => <BlogItem post={post} key={post.id} />);

  return (
    <section id="posts" className={postList}>
      {allPosts}
      {loading && (
        <div className={stack({ align: 'center' })} style={{ padding: '1rem' }}>
          <HashLoader color={'purple'} />
          <h2>Loading posts...</h2>
        </div>
      )}

      {error && (
        <div
          className={stack({ align: 'stretch' })}
          style={{ padding: '1rem' }}>
          <h2>Uh-oh, couldn't load posts...</h2>
          <p>Are you accessing the blog API from an authorized domain?</p>
        </div>
      )}
    </section>
  );
};
