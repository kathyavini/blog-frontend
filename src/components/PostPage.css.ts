import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { stack } from '../styles/recipes.css';

export const container = style({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  paddingBottom: '10vh',
  display: 'flex',
  flexFlow: 'column nowrap',
});

export const imageContainer = style({
  width: '100%',
  height: '100vh',
  position: 'relative',
});

export const imageMask = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundImage:
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0))',
});

export const imageTitle = style({
  width: '100%',
  paddingInline: '10%',
  color: 'white',
  position: 'absolute',
  top: '15vh',
});

globalStyle(`${imageTitle} h1`, {
  fontSize: '3rem',
  fontWeight: 400,
});

globalStyle(`${imageTitle} h2`, {
  fontSize: '1.8rem',
  fontWeight: 600,
});

export const mainImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const scrollIcon = style({
  color: vars.colors.white,
  backgroundColor: 'transparent',
  border: 'none',
  width: '3.5rem',
  height: '3.5rem',
  position: 'absolute',
  top: '80dvh',
  left: 'calc(50% - 2rem)',
  borderLeft: `2px solid ${vars.colors.white}`,
  borderBottom: `2px solid ${vars.colors.white}`,
  borderRadius: vars.borders.sm,
  rotate: '-45deg',
});

export const mainContent = style([
  stack({ gap: 'lg', align: 'center' }),
  { marginTop: '5rem' },
]);

export const headerWrapper = style([
  stack({ gap: 'none', align: 'center' }),
  { width: '100%' },
]);

export const postTitle = style({
  width: '90%',
  color: vars.colors.accentText,
  fontSize: '3.5rem',
  fontWeight: 500,
});

export const published = style({
  color: vars.colors.text,
});

export const body = style({
  width: 'min(90%, 40rem)',
  fontSize: '1.2rem',
  color: vars.colors.text,
  textAlign: 'start',
  lineHeight: '1.6',
});

export const commentContainer = style([
  stack({ gap: 'md' }),
  {
    width: 'min(90%, 40rem)',
    textAlign: 'start',
  },
]);

export const commentReply = style({
  paddingInline: '4rem',
  paddingBlock: '1rem',
});
