import { style, globalStyle } from '@vanilla-extract/css';

export const errorContainer = style({
  minWidth: 'max-content',
  textAlign: 'start',
  marginInline: 'auto',
  marginTop: '15vh',
});

globalStyle(`${errorContainer} h1`, {
  fontSize: '6rem',
});
