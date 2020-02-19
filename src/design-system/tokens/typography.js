export const fonts = {
  primary: 'azo-sans-web, Arial, sans-serif'
};

export const fontWeights = {
  normal: 400,
  bold: 700,
  black: 900
};

export const lineHeights = {
  normal: 11 / 8,
  wide: 6 / 5,
  xwide: 5 / 4,
  xxwide: 4 / 3,
  button: '2.5rem'
};

/** @type {string[] & Record<'tiny' | 'small' | 'normal' | 'large' | 'h3' | 'h2' | 'h1', string>} */
export const fontSizes = [
  '0.6875rem',
  '0.75rem', // tiny
  '0.8125rem',
  '0.875rem', // small
  '1rem', // normal
  '1.125rem', // large
  '1.25rem', // h3
  '1.375rem',
  '1.5rem',
  '1.75rem', // h2
  '2rem', // h1
  '2.25rem',
  '3rem'
];
fontSizes.tiny = fontSizes[1];
fontSizes.small = fontSizes[3];
fontSizes.normal = fontSizes[4];
fontSizes.large = fontSizes[5];
fontSizes.h3 = fontSizes[6];
fontSizes.h2 = fontSizes[9];
fontSizes.h1 = fontSizes[10];
