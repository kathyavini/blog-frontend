import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const titleRow = style({
  width: '88vw',
  minWidth: 'max-content',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  top: '2vh',
  left: '6vw',
  zIndex: 10,
});

export const pageTitle = style({
  maxWidth: '100%',
  color: vars.colors.accentText,
  fontSize: vars.sizes.respM,
  fontWeight: 500,
  position: 'relative',
});
