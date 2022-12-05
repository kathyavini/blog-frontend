import { RingLoader } from 'react-spinners';

import { BlogItem } from './BlogItem';
import { Post } from '../hooks/usePostFetch';

import { postList, errorContainer } from './BlogList.css';
import { spinner } from '../styles/style.css';

interface BlogListProps {
  posts: Post[];
  loading: boolean;
  error: boolean;
}

export const BlogList = ({ posts, loading, error }: BlogListProps) => {
  const allPosts = posts.map((post) => (
    <BlogItem //
      post={post}
      key={post.id}
    />
  ));

  return (
    <section className={postList}>
      {loading && (
        <div className={spinner}>
          <RingLoader />
        </div>
      )}

      {allPosts}

      {error && (
        <div className={errorContainer}>
          <h2>Uh-oh, couldn't load posts...</h2>
          <p>Are you accessing the blog API from an authorized domain?</p>
        </div>
      )}
    </section>
  );
};
