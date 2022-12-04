import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const container = style({
  width: 'min(90vw, 24rem)',
  transition: 'all 100ms',
  textAlign: 'start',
});

globalStyle(`${container} a`, {
  textDecoration: 'none',
});

export const postTitle = style({
  width: '100%',
  fontWeight: 500,
});

export const postContent = style({
  fontWeight: 300,
  fontSize: '1rem',
  color: vars.colors.accentText,
});

export const date = style({
  fontWeight: 500,
  color: vars.colors.textMuted,
  width: '100%',
});

export const image = style({
  width: 'min(90vw, 24rem)',
  aspectRatio: '1',

  borderRadius: vars.borders.images,
});

export const greyscaleImage = style({
  width: '100%',
  aspectRatio: '1',

  borderRadius: vars.borders.images,
  filter: 'grayscale(0%)',
  WebkitFilter: 'grayscale(0%)',
  transition: '.3s ease-in-out',

  ':hover': {
    filter: 'grayscale(80%)',
    WebkitFilter: 'grayscale(80%)',
  },
});
