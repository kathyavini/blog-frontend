import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { myCld, useCloudinary } from '../config/cloudinary';

import {
  AdvancedImage,
  placeholder,
  lazyload,
  responsive,
} from '@cloudinary/react';
import testingImage from '../assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg';

import {
  container,
  postTitle,
  contentPreview,
  date,
  blogImage,
  blogText,
} from './BlogItem.css';

import { Post } from '../hooks/usePostFetch';
interface BlogItemProps {
  post: Post;
}

export function BlogItem({ post }: BlogItemProps) {
  const imageId = myCld
    .image(post.image_cloud_id)
    .format('auto')
    .quality('auto');

  return (
    <article className={container}>
      <Link to={post.slug}>
        {useCloudinary ? (
          <AdvancedImage
            className={blogImage}
            cldImg={imageId}
            plugins={[
              lazyload(),
              placeholder({ mode: 'blur' }),
              responsive({ steps: 200 }),
            ]}
          />
        ) : (
          <img src={testingImage} alt="" className={blogImage} />
        )}
      </Link>

      <section className={blogText}>
        <h2 className={postTitle}>{post.title}</h2>

        <h3 className={contentPreview}>{post.body.slice(0, 80)} ...</h3>
        <p className={date}>
          {format(parseISO(post.created_at), 'MMMM dd, yyyy')}
        </p>
      </section>
    </article>
  );
}
