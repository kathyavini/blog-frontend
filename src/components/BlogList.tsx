import { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogItem } from './BlogItem';
import { Post } from './BlogItem';

import { stack } from '../styles/recipes.css';
import { postList } from './BlogList.css';

export const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((response) => {
        console.log(response.data);
        setError(false);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {});
  }, []);

  const allPosts = posts.map((post) => <BlogItem post={post} key={post.id} />);

  return (
    <section id="posts" className={postList}>
      {allPosts}
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
