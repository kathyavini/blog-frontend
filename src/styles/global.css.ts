import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Josh Comeau's CSS Reset
globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  // outline: '1px solid slategrey',
});

globalStyle('html', {
  // scrollBehavior: 'smooth', // unfortunately behaves badly with ScrollToTop
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('img', {
  objectFit: 'cover',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('#root', {
  isolation: 'isolate',
});

// Other globals
globalStyle('html, body, #root, #app', {
  minWidth: '100vw',
  minHeight: '100vh',
});

globalStyle('#app', {
  fontFamily: vars.fonts.body,
  background: vars.colors.backgroundSubtle,
  color: vars.colors.text,
});

globalStyle('h1, h2, h3, h4, h5, h5', {
  fontFamily: vars.fonts.heading,
  fontWeight: '700',
  // textTransform: 'uppercase',
});

globalStyle('a', {
  color: vars.colors.accentSolidHover,
  textDecoration: 'none',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
  color: vars.colors.accentSolidHover,
});

globalStyle('a:visited', {
  color: vars.colors.accentTextMuted,
});

globalStyle('ul', {
  // paddingLeft: '2rem',
});

globalStyle('li::marker', {
  color: vars.colors.accentTextMuted,
});
