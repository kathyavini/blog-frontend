import { useRef } from 'react';
import { AdvancedImage, placeholder } from '@cloudinary/react';
import { badge } from '../styles/style.css';
import {
  welcomeScreen,
  welcomeImage,
  scrollPrompt,
  message,
} from './WelcomeHeader.css';
import { myCld, useCloudinary, homepageImgId } from '../config/cloudinary';
import headerImage from '../assets/Sable_KeyArt_Wallpaper.png';

export const WelcomeHeader = () => {
  const scrollRef = useRef<HTMLSelectElement>(null!);

  const imageId = myCld.image(homepageImgId).format('auto');

  return (
    <>
      <header className={welcomeScreen}>
        <div className={welcomeImage}>
          {useCloudinary ? (
            <AdvancedImage
              cldImg={imageId}
              plugins={[placeholder({ mode: 'blur' })]}
            />
          ) : (
            <img src={headerImage} />
          )}
          <button
            className={scrollPrompt}
            onClick={() =>
              scrollRef.current.scrollIntoView({ behavior: 'smooth' })
            }>
            Enter
          </button>
        </div>
      </header>
      <section ref={scrollRef} id="message" className={message}>
        <h1>Welcome to our Favourite Worlds!</h1>
        <p>
          This page is a work in progress! Once it's completed, this will be the
          home of our blog "Our Favourite Worlds."
        </p>
        <p className={badge}>
          For now all the blog posts are filler text, but watch this space for
          updates!
        </p>
      </section>
    </>
  );
};
