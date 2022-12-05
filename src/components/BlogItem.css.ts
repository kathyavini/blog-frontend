import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { stack } from '../styles/recipes.css';

export const container = style([
  stack({ gap: 'none', align: 'start' }),
  {
    width: 'min(90vw, 24rem)',
    textAlign: 'start',
  },
]);

export const postTitle = style({
  width: '100%',
  fontWeight: 500,
});

export const contentPreview = style({
  fontWeight: 300,
  fontSize: '1rem',
  color: vars.colors.accentText,
});

export const date = style({
  fontWeight: 500,
  color: vars.colors.textMuted,
  width: '100%',
});

export const greyscaleImage = style({
  width: '100%',
  height: 'min(90vw, 24rem)', // container width
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
