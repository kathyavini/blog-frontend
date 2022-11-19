import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { image } from '../styles/style.css';

export const container = style({
  textAlign: 'center',
  padding: 'clamp(0.5rem, 4vw, 2.5rem)',
  transition: 'all 100ms',
});

export const postTitle = style({
  fontWeight: 500,
});

export const date = style({
  fontWeight: 500,
  color: vars.colors.textMuted,
});

export const greyscaleImage = style([
  image,
  {
    filter: 'grayscale(0%)',
    WebkitFilter: 'grayscale(0%)',
    transition: '.3s ease-in-out',

    ':hover': {
      filter: 'grayscale(80%)',
      WebkitFilter: 'grayscale(80%)',
    },
  },
]);
