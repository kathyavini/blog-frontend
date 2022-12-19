import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

const headerRowBase = {
  width: '88vw',
  minWidth: 'max-content',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: '1rem',
};

export const homepage = style({
  ...headerRowBase,
});

export const post = style({
  ...headerRowBase,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
});

const titleTextBase = {
  maxWidth: '100%',
  fontSize: vars.sizes.respM,
  fontWeight: 500,
  color: vars.colors.accentText,
};

export const titleHome = style({
  ...titleTextBase,
  position: 'relative', // can't spread this one in for some reason! Interesting and possibly a bug
});

export const titlePost = style({
  ...titleTextBase,
  position: 'relative',
  visibility: 'hidden',
});
