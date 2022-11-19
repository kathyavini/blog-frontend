import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const appContainer = style({
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: vars.sizes.respXL,
  // textAlign: 'center',
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

export const welcomeImage = style({
  height: '80vh',
  width: '88vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20vh',

  backgroundImage: "url('/Sable_KeyArt_Wallpaper.png')",

  // '@media': {
  //   [`screen and (min-width: ${breakpoints.md})`]: {
  //     backgroundImage: "url('/testing.jpg')",
  //     backgroundPositionY: '25%',
  //   },
  // },
});

// From Open Props
const fadeInBloom = keyframes({
  '0%': { opacity: '0', filter: 'brightness(1) blur(20px)' },
  '10%': { opacity: '1', filter: 'brightness(2) blur(10px)' },
  '100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
});

export const pageTitle = style({
  maxWidth: '100%',
  // width: '50%',
  color: vars.colors.accentText, // should not change with theme
  fontSize: vars.sizes.respM,
  alignSelf: 'flex-start',
  marginLeft: '6vw',

  // '@media': {
  //   [`screen and (min-width: ${breakpoints.md})`]: {
  //     color: '#fbecfc',
  //   },
  // },
});

export const pageSubtitle = style({
  color: '#faf4e8', // should not change with theme
  fontSize: vars.sizes.respL,
  fontFamily: vars.fonts.body,
  textTransform: 'none',
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
