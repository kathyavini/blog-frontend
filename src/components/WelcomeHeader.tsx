import { useRef } from 'react';
import { AdvancedImage, placeholder } from '@cloudinary/react';
import { badge } from '../styles/style.css';
import {
  welcomeScreen,
  welcomeImage,
  scrollPrompt,
  message,
  pageSubtitle,
} from './WelcomeHeader.css';
import { myCld, useCloudinary, homepageImgId } from '../config/cloudinary';
import headerImage from '../assets/Sable_KeyArt_Wallpaper.png';

export const WelcomeHeader = () => {
  const scrollRef = useRef<HTMLSelectElement>(null!);

  const imageId = myCld.image(homepageImgId);

  return (
    <>
      <section className={welcomeScreen}>
        <div className={welcomeImage}>
          {useCloudinary ? (
            <AdvancedImage
              cldImg={imageId}
              plugins={[placeholder({ mode: 'blur' })]}
              loading="eager"
              alt="Image from the game Sable"
            />
          ) : (
            <img
              src={headerImage}
              loading="eager"
              alt="Image from the game Sable"
            />
          )}
          <button
            className={scrollPrompt}
            onClick={() =>
              scrollRef.current.scrollIntoView({ behavior: 'smooth' })
            }>
            Enter
          </button>
        </div>
      </section>
      <section ref={scrollRef} id="message" className={message}>
        <h1>Our Favourite Worlds</h1>
        <p className={pageSubtitle}>
          For now all the blog posts are filler text, but watch this space for
          updates!
        </p>
      </section>
    </>
  );
};
