import { useState } from 'react';
import { button, image, divider } from '../styles/style.css';
import { stack } from '../styles/recipes.css';
import { container, postTitle, date, greyscaleImage } from './BlogItem.css';

interface BlogItemProps {
  image: string;
}

export function BlogItem({ image }: BlogItemProps) {
  const [imgAlt, setImgAlt] = useState(true);

  return (
    <div className={container}>
      <div
        className={stack({ gap: 'none', align: 'start' })}
        onMouseEnter={() => setImgAlt(false)}
        onMouseLeave={() => setImgAlt(true)}>
        <img className={greyscaleImage} src={image} />
        <h2 className={postTitle}>Post Name</h2>
        {/* <h3>Post Description</h3> */}
        {/* <div className={divider.small} /> */}
        <p className={date}>18 November, 2022</p>
      </div>
    </div>
  );
}
