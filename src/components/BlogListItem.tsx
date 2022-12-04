import { Link } from 'react-router-dom';
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
} from './BlogListItem.css';

import testingImage from '../assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg';

import { Post } from '../App';
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
        <div className={stack({ gap: 'none', align: 'start' })}>
          <AdvancedImage
            className={greyscaleImage}
            cldImg={imageId}
            plugins={[responsive(), placeholder({ mode: 'predominant' })]}
          />
          {/* <img src={testingImage} alt="" className={greyscaleImage} /> */}
          <h2 className={postTitle}>{post.title}</h2>
          <h3 className={postContent}>{post.body.slice(0, 80)} ...</h3>
          <p className={date}>
            {format(parseISO(post.created_at), 'MMMM dd, yyyy')}
          </p>
        </div>
      </Link>
    </article>
  );
}
