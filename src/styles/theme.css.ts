import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

import { plum, plumDark, mauve, mauveDark } from '@radix-ui/colors';

const root = createGlobalTheme(':root', {
  fonts: {
    heading: '"Karla", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  sizes: {
    respS: 'clamp(0.8rem, 0.7rem + 4vw, 1.7rem)',
    respM: 'clamp(1.3rem, 0.9rem + 2vw, 2rem)',
    respL: 'clamp(2rem, 1rem + 4vw, 4rem)',
    respXL: 'clamp(3rem, 2rem + 4vw, 5rem)',
  },
  borders: {
    sm: '3px',
    md: '6px',
    images: '0px',
    buttons: '0px',
  },
});

export const breakpoints = {
  sm: '650px',
  md: '860px',
};

const colors = createThemeContract({
  white: '', //
  black: '',
  text: '',
  textMuted: '',
  background: '',
  backgroundSubtle: '',
  component: '',
  componentHover: '',
  componentSelect: '',
  borders: '',
  bordersHover: '',
  solid: '',
  solidHover: '',
  accentSolid: '',
  accentSolidHover: '',
  accentBackground: '',
  accentComponent: '',
  accentComponentHover: '',
  accentComponentSelected: '',
  accentBorders: '',
  accentBordersHover: '',
  accentText: '',
  accentTextMuted: '',
});

export const lightTheme = createTheme(colors, {
  white: '#ffffff',
  black: '#000000',

  background: mauve.mauve1,
  backgroundSubtle: mauve.mauve2,

  component: mauve.mauve3,
  componentHover: mauve.mauve4,
  componentSelect: mauve.mauve5,

  borders: mauve.mauve7,
  bordersHover: mauve.mauve8,

  solid: mauve.mauve9,
  solidHover: mauve.mauve10,

  text: mauve.mauve12,
  textMuted: mauve.mauve11,

  accentSolid: plum.plum9,
  accentSolidHover: plum.plum10,

  accentBackground: plum.plum2,

  accentComponent: plum.plum4,
  accentComponentHover: plum.plum5,
  accentComponentSelected: plum.plum6,

  accentBorders: plum.plum7,
  accentBordersHover: plum.plum8,

  accentText: plum.plum12,
  accentTextMuted: plum.plum11,
});

export const darkTheme = createTheme(colors, {
  white: '#000000', // sorry
  black: '#ffffff',

  background: mauveDark.mauve1,
  backgroundSubtle: mauveDark.mauve2,

  component: mauveDark.mauve3,
  componentHover: mauveDark.mauve4,
  componentSelect: mauveDark.mauve5,

  borders: mauveDark.mauve7,
  bordersHover: mauveDark.mauve8,

  solid: mauveDark.mauve9,
  solidHover: mauveDark.mauve10,

  text: mauveDark.mauve12,
  textMuted: mauveDark.mauve11,

  accentBackground: plumDark.plum2,

  accentComponent: plumDark.plum4,
  accentComponentHover: plumDark.plum5,
  accentComponentSelected: plumDark.plum6,

  accentBorders: plumDark.plum7,
  accentBordersHover: plumDark.plum8,

  accentSolid: plumDark.plum9,
  accentSolidHover: plumDark.plum10,

  accentText: plumDark.plum12,
  accentTextMuted: plumDark.plum11,
});

export const vars = { ...root, colors };
