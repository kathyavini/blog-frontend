import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { format, parseISO } from 'date-fns';
import { useCommentFetch } from '../hooks/useCommentFetch';
import { myCld, useCloudinary } from '../config/cloudinary';
import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import testingImage from '../assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg';

import { Post } from '../hooks/usePostFetch';
import { Resource404 } from './Resource404';

import { button, spinner } from '../styles/style.css';
import {
  container,
  postTitle,
  published,
  imageContainer,
  imageTitle,
  mainImage,
  imageMask,
  scrollIcon,
  mainContent,
  headerWrapper,
  body,
  commentContainer,
  commentReply,
} from './PostPage.css';

interface PostPageProps {
  posts: Post[];
  loading: Boolean;
}

export const PostPage = ({ posts, loading }: PostPageProps) => {
  const contentRef = useRef<HTMLDivElement>(null!);

  const { blogId } = useParams();
  // console.log('BlogId is', blogId);

  // Originally matched in App.tsx and only sent the needed post, but there would be a flash of 404 (post == null) on every page refresh of a parametarized route
  const post = posts.find((post) => post.slug === blogId);

  const [comments, error] = useCommentFetch(blogId!);

  const imageId = myCld.image(post?.image_cloud_id);

  const postComments = comments.map(
    ({ id, author, published_at, body, childComments }) => (
      <div key={id}>
        <p>{author.displayName}</p>
        <p>{format(parseISO(published_at), 'MMMM dd, yyyy ')}</p>
        <p>{body}</p>
        {childComments &&
          childComments.map(({ id, author, published_at, body }) => (
            <div key={id} className={commentReply}>
              <p>{author.displayName}</p>
              <p>{format(parseISO(published_at), 'MMMM dd, yyyy ')}</p>
              <p>{body}</p>
            </div>
          ))}
      </div>
    )
  );

  return (
    <article className={container}>
      {loading && (
        <div className={spinner} style={{ height: '100vh' }}>
          <RingLoader />
        </div>
      )}
      {post && (
        <>
          <header className={imageContainer}>
            {useCloudinary ? (
              <AdvancedImage
                className={mainImage}
                cldImg={imageId}
                plugins={[
                  responsive({ steps: 200 }),
                  placeholder({ mode: 'blur' }),
                ]}
              />
            ) : (
              <img src={testingImage} alt="" className={mainImage} />
            )}

            <div className={imageMask} />
            <div className={imageTitle}>
              <h2>Our Favourite Worlds</h2>
              <h1>{post.title}</h1>
            </div>
            <button
              aria-label="Scroll to Post"
              className={scrollIcon}
              onClick={() =>
                contentRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </header>
          <div id="main-content" ref={contentRef} />
          <main className={mainContent}>
            <div className={headerWrapper}>
              <h2 className={postTitle}>{post.title}</h2>
              <p className={published}>
                Published {format(parseISO(post.created_at), 'MMMM dd, yyyy ')}
                by {post.author.displayName}
              </p>
            </div>
            <p className={body}>{post.body}</p>
            <section className={commentContainer}>{postComments}</section>
            <Link to="/">
              <button className={button.primary}>Return to Blog Home</button>
            </Link>
          </main>
        </>
      )}
      {post == null && <Resource404 resource="Post" />}
    </article>
  );
};
