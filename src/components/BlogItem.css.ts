import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { stack } from '../styles/recipes.css';

export const container = style([
  stack({ gap: 'md', align: 'start' }),
  {
    width: '100%',
    height: 'fit-content',
    textAlign: 'start',
    padding: '20px',
    position: 'relative',
    '@media': {
      [`screen and (min-width: ${breakpoints.sm})`]: {
        width: '50%',
      },
      [`screen and (min-width: ${breakpoints.md})`]: {
        width: '33%',
        maxWidth: '500px',
      },
    },
  },
]);

export const blogImage = style({
  cursor: 'pointer',
  width: '100%',
  aspectRatio: '3 / 2',

  borderRadius: vars.borders.images,
  filter: 'grayscale(0%)',
  WebkitFilter: 'grayscale(0%)',
  transition: '.3s ease-in-out',

  ':hover': {
    filter: 'grayscale(80%)',
    WebkitFilter: 'grayscale(80%)',
  },
});

export const blogText = style([stack({ gap: 'xs' }), {}]);

// Full screen image for first row
globalStyle(`${container}:first-child`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      width: '100%',
      maxWidth: '100%',
    },
  },
});

globalStyle(`${container}:first-child img`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      width: '100%',
      aspectRatio: '2 / 1',
    },
  },
});

globalStyle(`${container}:first-child ${blogText}`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.sm})`]: {
      position: 'absolute',
      bottom: '40px',
      left: '40px',
      width: '80%',
      maxWidth: '500px',
      backgroundColor: vars.colors.background,
      paddingInline: '2rem',
      paddingBlock: '3rem',
    },
  },
});

// 2 : 1 ratio for 2nd and 4th rows
globalStyle(`${container}:nth-child(3), ${container}:nth-child(6)`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      width: '67%',
      maxWidth: '67%',
    },
  },
});

globalStyle(`${container}:nth-child(3) ${blogText}`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      position: 'absolute',
      bottom: '40px',
      right: '40px',
      width: '80%',
      maxWidth: '500px',
      backgroundColor: vars.colors.background,
      paddingInline: '2rem',
      paddingBlock: '2rem',
    },
  },
});

globalStyle(`${container}:nth-child(6) ${blogText}`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      position: 'absolute',
      bottom: '40px',
      left: '40px',
      width: '80%',
      maxWidth: '500px',
      backgroundColor: vars.colors.background,
      paddingInline: '2rem',
      paddingBlock: '2rem',
    },
  },
});

// 50/50 with centered text for 3rd row
globalStyle(`${container}:nth-child(4), ${container}:nth-child(5)`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      width: '50%',
      maxWidth: '50%',
      display: 'grid',
      gridTemplate: '1fr / 1fr',
    },
  },
});

globalStyle(`${container}:nth-child(4) img, ${container}:nth-child(5) img`, {
  '@media': {
    [`screen and (min-width: ${breakpoints.lg})`]: {
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
});

globalStyle(
  `${container}:nth-child(4) ${blogText}, ${container}:nth-child(5) ${blogText}`,
  {
    '@media': {
      [`screen and (min-width: ${breakpoints.lg})`]: {
        width: '70%',
        maxWidth: '350px',
        backgroundColor: vars.colors.background,
        paddingInline: '2rem',
        paddingBlock: '2.5rem',
        gridRow: '1 / 2',
        gridColumn: '1 / 2',
        zIndex: '1',
        alignSelf: 'center',
        placeSelf: 'center',
      },
    },
  }
);

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
