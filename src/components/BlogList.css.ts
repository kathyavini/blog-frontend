import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';

export const postList = style({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
});