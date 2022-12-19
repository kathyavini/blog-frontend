import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { button } from '../styles/style.css';
import { stack } from '../styles/recipes.css';

export const welcomeScreen = style({
  height: '85dvh',
  width: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '5vh',
});

export const pageTitle = style({
  maxWidth: '100%',
  color: vars.colors.accentText,
  fontSize: vars.sizes.respM,
  fontWeight: 500,
  position: 'relative',
});

export const welcomeImage = style({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20vh',

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: "url('/Sable_KeyArt_lowres.jpg')",

  border: `1px solid ${vars.colors.text}`,
  position: 'relative',
});

globalStyle(`${welcomeImage} img`, {
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
});

// From Open Props
const fadeInBloom = keyframes({
  '0%': { opacity: '0', filter: 'brightness(1) blur(20px)' },
  '10%': { opacity: '1', filter: 'brightness(2) blur(10px)' },
  '100%': { opacity: '1', filter: 'brightness(1) blur(0)' },
});

export const scrollPrompt = style([
  button.filled,
  {
    marginTop: '40vh',
    opacity: 0,
    animationName: fadeInBloom,
    animationDuration: '2s',
    animationFillMode: 'forwards',
    border: `1px solid ${vars.colors.text}`,
    ':hover': {
      border: `1px solid ${vars.colors.text}`,
    },
  },
]);

export const message = style([
  stack({ gap: 'xs', align: 'center' }),
  {
    width: 'min(100%, 60rem)',
    padding: vars.sizes.respXL,
    textAlign: 'center',
  },
]);

export const pageSubtitle = style({
  fontSize: vars.sizes.respM,
  fontFamily: vars.fonts.body,
  textTransform: 'none',
});
