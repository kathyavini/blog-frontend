import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const appContainer = style({
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',

  // gap: vars.sizes.respXL,
  // textAlign: 'center',
});

export const contentContainer = style({
  width: '88vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
});

export const welcomeScreen = style({
  height: '100vh',
  width: '100%',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5vh',
});

export const corner = style({
  position: 'absolute',
  top: '2vh',
  right: 0,
});

export const titleRow = style({
  // width: '88vw',
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const pageTitle = style({
  maxWidth: '100%',
  color: vars.colors.accentText,
  fontSize: vars.sizes.respM,
  // paddingLeft: '6vw',
});

export const pageSubtitle = style({
  color: '#faf4e8', // should not change with theme as it overlays the image
  fontSize: vars.sizes.respL,
  fontFamily: vars.fonts.body,
  textTransform: 'none',
});

export const welcomeImage = style({
  height: '80vh',
  // width: '88vw',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20vh',

  backgroundImage: "url('/Sable_KeyArt_Wallpaper.png')",

  // border: `1px solid ${vars.colors.text}`,
});

// From Open Props
const fadeInBloom = keyframes({
  '0%': { opacity: '0', filter: 'brightness(1) blur(20px)' },
  '10%': { opacity: '1', filter: 'brightness(2) blur(10px)' },
  '100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
});

export const scrollPrompt = style({
  marginTop: '40vh',
  opacity: 0,
  animationName: fadeInBloom,
  animationDuration: '2s',
  animationDelay: '1s',
  animationFillMode: 'forwards',
});

export const main = style({
  width: '100%',
  padding: vars.sizes.respXL,
});

export const pageElements = style({
  width: '100%',
  textAlign: 'start',
});

globalStyle(`${pageElements} h2:first-child`, {
  fontSize: '2.5rem',
});

globalStyle(`${pageElements} h3`, {
  fontSize: '2rem',
  marginTop: '2vh',
});
