import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const imageId = myCld
    .image(post.image_cloud_id)
    .format('auto')
    .quality('auto');

  return (
    <article
      className={container}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(25px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
      }}>
      {useCloudinary ? (
        <AdvancedImage
          alt={post.title}
          className={blogImage}
          cldImg={imageId}
          plugins={[placeholder({ mode: 'blur' }), responsive({ steps: 200 })]}
          loading="lazy"
          onClick={() => navigate(post.slug)}
        />
      ) : (
        <img
          src={testingImage}
          alt={post.title}
          className={blogImage}
          loading="lazy"
          onClick={() => navigate(post.slug)}
        />
      )}

      <section className={blogText}>
        <Link to={post.slug}>
          <h2 className={postTitle}>{post.title}</h2>
        </Link>

        <h3 className={contentPreview}>{post.body.slice(0, 80)} ...</h3>
        <p className={date}>
          {format(parseISO(post.created_at), 'MMMM dd, yyyy')}
        </p>
      </section>
    </article>
  );
}
