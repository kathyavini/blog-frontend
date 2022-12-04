import { useState, useEffect } from 'react';
import axios from '../config/axios';
import { HashLoader } from 'react-spinners';
import { BlogItem } from './BlogListItem';
import { Post } from '../App';

import { stack } from '../styles/recipes.css';
import { postList } from './BlogList.css';

interface BlogListProps {
  posts: Post[];
  loading: boolean;
  error: boolean;
}

export const BlogList = ({ posts, loading, error }: BlogListProps) => {
  const allPosts = posts.map((post) => <BlogItem post={post} key={post.id} />);

  return (
    <section id="posts" className={postList}>
      {allPosts}
      {loading && (
        <div className={stack({ align: 'center' })} style={{ padding: '1rem' }}>
          <HashLoader color={'purple'} />
        </div>
      )}

      {error && (
        <div
          className={stack({ align: 'stretch' })}
          style={{
            padding: '1rem',
            marginBottom: '10vh',
            textAlign: 'center',
          }}>
          <h2>Uh-oh, couldn't load posts...</h2>
          <p>Are you accessing the blog API from an authorized domain?</p>
        </div>
      )}
    </section>
  );
};
