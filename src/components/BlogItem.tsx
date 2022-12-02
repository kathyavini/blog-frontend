import { format, parseISO } from 'date-fns';
import { myCld } from '../config/cloudinary';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

import { stack } from '../styles/recipes.css';
import {
  container,
  postTitle,
  postContent,
  date,
  greyscaleImage,
} from './BlogItem.css';

export interface Post {
  author: string | null;
  body: string;
  created_at: string;
  slug: string;
  title: string;
  url: string;
  id: string;
  image_cloud_url: string;
  image_cloud_id: string;
}

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
      <a href="">
        <div className={stack({ gap: 'none', align: 'start' })}>
          <AdvancedImage
            className={greyscaleImage}
            cldImg={imageId}
            plugins={[responsive(), placeholder({ mode: 'predominant' })]}
          />
          <h2 className={postTitle}>{post.title}</h2>
          <h3 className={postContent}>{post.body.slice(0, 80)} ...</h3>
          <p className={date}>
            Posted:{' '}
            {format(parseISO(post.created_at), "MMMM dd, yyyy 'at' h:mbbb")}
          </p>
        </div>
      </a>
    </article>
  );
}
