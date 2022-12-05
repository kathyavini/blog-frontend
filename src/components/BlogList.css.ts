import { style, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { stack } from '../styles/recipes.css';

export const postList = style({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  gap: 'clamp(3rem, 5vw, 8rem)',
  marginBottom: '10vh',
});

export const errorContainer = style([
  stack({ align: 'stretch' }),
  {
    padding: '1rem',
    marginBottom: '10vh',
    textAlign: 'center',
  },
]);
