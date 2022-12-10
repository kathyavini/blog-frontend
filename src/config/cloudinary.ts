import { Cloudinary } from '@cloudinary/url-gen';

export const myCld = new Cloudinary({
  cloud: {
    cloudName: 'duax3azzt',
  },
});

// When set to false local test images are used to save on Cloudinary usage/transforms
export const useCloudinary = true;

export const homepageImgId = 'blog-api/jt6tkhqpio0ulshurxk7';
