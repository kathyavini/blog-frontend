import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

globalStyle('#app', {
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
});

export const contentContainer = style({
  width: '88vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  position: 'relative',
  alignItems: 'center',
});
