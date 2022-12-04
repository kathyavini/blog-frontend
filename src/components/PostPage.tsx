import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { myCld } from '../config/cloudinary';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

import testingImage from '../assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg';

import { stack } from '../styles/recipes.css';
import { button } from '../styles/style.css';
import {
  container,
  postTitle,
  postContent,
  published,
  imageContainer,
  imageTitle,
  mainImage,
  imageMask,
  scrollIcon,
} from './PostPage.css';

import { Post } from '../App';
import { ErrorMessage } from './errorMessage';

interface PostProps {
  post: Post | null | undefined;
}

export function PostPage({ post }: PostProps) {
  // This happens whenever the URL is accessed directly
  if (post == null) {
    return <ErrorMessage />;
  }

  // Not sure when this happens
  if (post == undefined) {
    console.log('Post was undefined');
  }

  const imageId = myCld
    .image(post.image_cloud_id)
    .format('auto')
    .quality('auto');

  return (
    <article className={container}>
      <header className={imageContainer}>
        <AdvancedImage
          className={mainImage}
          cldImg={imageId}
          plugins={[responsive(), placeholder({ mode: 'predominant' })]}
        />
        {/* <img src={testingImage} alt="" className={mainImage} /> */}
        <div className={imageMask} />
        <div className={imageTitle}>
          <h2>Our Favourite Worlds</h2>
          <h1>{post.title}</h1>
        </div>
        <a className={scrollIcon} href="#main-content" />
      </header>
      <div id="main-content"></div>
      <main
        className={stack({ gap: 'lg', align: 'center' })}
        style={{ marginTop: '5rem' }}>
        <div
          style={{ width: '100%' }}
          className={stack({ gap: 'none', align: 'center' })}>
          <h2 className={postTitle}>{post.title}</h2>
          <p className={published}>
            Published {format(parseISO(post.created_at), 'MMMM dd, yyyy')} by{' '}
            {post.author.displayName}
          </p>
        </div>
        <p className={postContent}>{post.body}</p>
        <Link to="/" preventScrollReset={false}>
          <button className={button.primary}>Return to Blog Home</button>
        </Link>
      </main>
    </article>
  );
}
