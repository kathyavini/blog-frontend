import { format, parseISO } from 'date-fns';
import { button, divider } from '../styles/style.css';
import { stack } from '../styles/recipes.css';
import {
  container,
  postTitle,
  postContent,
  date,
  greyscaleImage,
} from './BlogItem.css';

import testImage from '../assets/testing.jpg';

export interface Post {
  author: string | null;
  body: string;
  created_at: string;
  slug: string;
  title: string;
  url: string;
  id: string;
  image_cloud_url: string;
}

interface BlogItemProps {
  post: Post;
}

export function BlogItem({ post }: BlogItemProps) {
  return (
    <article className={container}>
      <a href="">
        <div className={stack({ gap: 'none', align: 'start' })}>
          <img className={greyscaleImage} src={post.image_cloud_url} />
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
