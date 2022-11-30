import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const appContainer = style({
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
});

export const contentContainer = style({
  width: '88vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
});

export const main = style({
  width: '100%',
  padding: vars.sizes.respXL,
});
