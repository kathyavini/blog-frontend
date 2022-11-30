import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars, breakpoints } from './theme.css';

export const buttonBase = style({
  padding: '0.7rem 2rem',

  borderRadius: vars.borders.buttons,

  fontFamily: vars.fonts.body,
  fontSize: '1rem',
  fontWeight: 300,
  textTransform: 'uppercase',

  ':active': {
    filter: 'brightness(1.1)',
  },
});

export const button = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      border: `1px solid ${vars.colors.accentText}`,
      color: vars.colors.accentText,

      ':hover': {
        color: vars.colors.accentTextMuted,
        border: `1px solid ${vars.colors.accentTextMuted}`,
      },
    },
  ],
  filled: [
    buttonBase,
    {
      backgroundColor: vars.colors.accentComponentHover,
      color: vars.colors.accentText,
      border: `1px solid ${vars.colors.accentComponentHover}`,

      ':hover': {
        backgroundColor: vars.colors.accentComponentSelected,
        border: `1px solid ${vars.colors.accentComponentSelected}`,
      },
    },
  ],
  animated: [
    buttonBase,
    {
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'transparent',
      color: vars.colors.text,
      border: `1px solid ${vars.colors.text}`,

      ':hover': {
        color: vars.colors.accentText,
        border: `1px solid ${vars.colors.accentComponent}`,
      },

      '::after': {
        content: '',
        backgroundColor: vars.colors.accentComponent,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% + 1px)',
        borderRadius: vars.borders.buttons,
        transform: 'scaleX(0)',
        transformOrigin: '0% 50%',
        zIndex: -1,
        transition: 'transform 0ms',
      },

      selectors: {
        '&:hover::after': {
          transform: 'scaleX(1)',
          transition: 'transform 200ms ease-in-out',
        },
      },
    },
  ],
});

// Because this button has to be targeted with the selectors key, I can't figure out a way to make use of the previously defined button styles unfortunately
export const uploadButton = style({
  selectors: {
    '&::file-selector-button': {
      border: `1px solid ${vars.colors.accentComponent}`,
      padding: '0.5rem 0.7rem',
      borderRadius: vars.borders.md,

      fontFamily: vars.fonts.body,
      fontSize: '1rem',

      backgroundColor: vars.colors.accentComponent,
      color: vars.colors.black,
    },

    '&::file-selector-button:hover': {
      backgroundColor: vars.colors.accentComponentHover,
      border: `1px solid ${vars.colors.accentComponentHover}`,
    },
    '&::file-selector-button:active': {
      filter: 'brightness(1.1)',
    },
  },
});

export const badge = style({
  background: vars.colors.accentComponent,
  color: vars.colors.accentTextMuted,

  fontSize: '1rem',
  padding: '1rem 2rem',
  fontWeight: 300,
  textAlign: 'center',
  lineHeight: '1.5rem',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',

  rowGap: '0.7rem',
});

globalStyle(`${badge} a`, {
  color: vars.colors.accentText,
});

const dividerBase = style({
  borderTop: `1px solid ${vars.colors.text}`,
  width: '100%',
  marginBlock: '0.7rem',
});

export const divider = styleVariants({
  full: [
    dividerBase,
    {
      width: '100%',
      marginBlock: '0.7rem',
    },
  ],
  small: [
    dividerBase,
    {
      width: '2rem',
      marginBlock: '0.5rem',
    },
  ],
});

export const themeToggle = style({
  padding: '.8em .8em',
  backgroundColor: 'transparent',
  // backgroundColor: vars.colors.accentComponent,
  borderRadius: vars.borders.buttons,
  color: vars.colors.accentText,
  border: 'none',
  // border: `1px solid ${vars.colors.accentBorders}`,

  textTransform: 'uppercase',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  alignSelf: 'flex-start',

  ':hover': {
    // backgroundColor: vars.colors.accentComponentHover,
    // border: `1px solid ${vars.colors.accentBordersHover}`,
  },

  ':active': {
    filter: 'brightness(1.1)',
  },
});

globalStyle(`${themeToggle} span`, {
  fontSize: vars.sizes.respM,
  paddingRight: '0.4rem',
});
