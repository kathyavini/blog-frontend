import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

const base = {
  width: '88vw',
  minWidth: 'max-content',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: '1rem',
};

export const homepage = style({
  ...base,
});

export const post = style({
  ...base,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
});

export const titleHome = style({
  maxWidth: '100%',
  color: vars.colors.accentText,
  fontSize: vars.sizes.respM,
  fontWeight: 500,
  position: 'relative',
});

export const titlePost = style({
  fontSize: vars.sizes.respM,
  fontWeight: 500,
  position: 'relative',
  visibility: 'hidden',
});
