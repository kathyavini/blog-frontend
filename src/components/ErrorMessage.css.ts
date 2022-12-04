import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const errorContainer = style({
  width: 'min(90vw, 50rem)',
  minWidth: 'max-content',
  height: '100%',
  padding: '10rem',
  transition: 'all 100ms',
  textAlign: 'start',
});

globalStyle(`${errorContainer} h1`, {
  fontSize: '6rem',
});
