import { style, globalStyle } from '@vanilla-extract/css';

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
