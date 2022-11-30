import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

import { mauve, mauveDark, plum, plumDark } from '@radix-ui/colors';
import { Cyan } from './openPropsColors';

const root = createGlobalTheme(':root', {
  fonts: {
    heading: '"Cabin", sans-serif',
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
    lg: '12px',
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

  accentBackground: '',
  accentComponent: '',
  accentComponentHover: '',
  accentComponentSelected: '',

  accentSubtleBorders: '',
  accentBorders: '',
  accentBordersHover: '',

  accentSolid: '',
  accentSolidHover: '',

  accentTextMuted: '',
  accentText: '',
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

  accentBackground: plum.plum2,

  accentComponent: plum.plum3,
  accentComponentHover: plum.plum4,
  accentComponentSelected: plum.plum5,

  accentSubtleBorders: plum.plum6,

  accentBorders: plum.plum7,
  accentBordersHover: plum.plum8,

  accentSolid: plum.plum9,
  accentSolidHover: plum.plum10,

  accentTextMuted: plum.plum11,
  accentText: plum.plum12,
});

const radixDark = {
  accentBackground: plumDark.plum2,

  accentComponent: plumDark.plum3,
  accentComponentHover: plumDark.plum4,
  accentComponentSelected: plumDark.plum5,

  accentSubtleBorders: plumDark.plum6,

  accentBorders: plumDark.plum7,
  accentBordersHover: plumDark.plum8,

  accentSolid: plumDark.plum9,
  accentSolidHover: plumDark.plum10,

  accentTextMuted: plumDark.plum11,
  accentText: plumDark.plum12,
};

const openPropsDark = {
  accentBackground: Cyan['--cyan-1'],

  accentComponent: Cyan['--cyan-10'],
  accentComponentHover: Cyan['--cyan-9'],
  accentComponentSelected: Cyan['--cyan-8'],

  accentSubtleBorders: Cyan['--cyan-7'],

  accentBorders: Cyan['--cyan-6'],
  accentBordersHover: Cyan['--cyan-5'],

  accentSolid: Cyan['--cyan-4'],
  accentSolidHover: Cyan['--cyan-3'],

  accentTextMuted: Cyan['--cyan-2'],
  accentText: Cyan['--cyan-1'],
};

export const darkTheme = createTheme(colors, {
  ...radixDark,
  // ...openPropsDark,
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
});

export const vars = { ...root, colors };
