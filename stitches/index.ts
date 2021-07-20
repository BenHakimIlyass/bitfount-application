import { createCss, global } from '@stitches/react';
export const { styled, css, getCssString } = createCss({
  theme: {
    colors: {
      orange: '#F36843',
      lightBlue: '#16B1E6',
      blue: '#1B204C',
      gray100: '#FBFBFC',
      gray200: '#F7F7F9',
      gray300: '#F4F4F8',
      gray400: '#9193A8',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      montserrat: 'Montserrat, sans-serif',
      code: 'Source Code Pro',
    },
    shadows: {
      sh1: '0px 4px 19px rgba(27, 32, 76, 0.06)',
      sh2: '14px 14px 40px rgba(0, 0, 0, 0.04)',
    },
  },
});
export const globalStyles = global({
  body: {
    overflowX: 'hidden',
    backgroundColor: '$gray100',
    margin: 0,
  },
  '*': {
    fontFamily: 'Montserrat, sans-serif',
  },
  button: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  },
});
