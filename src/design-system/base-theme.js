import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  fontSizes,
  fonts,
  fontWeights,
  lineHeights
} from './tokens/typography';
import { space } from './tokens/space';
import { colors } from './tokens/colors';
import { breakpoints } from './tokens/breakpoints';
import { shadows, radii, borders, sizes } from './tokens/shapes-and-sizes';
import { logos } from './tokens/logos';

export const baseTheme = {
  name: 'New Brand',
  isNewBrand: true,
  /* new brand styled-system theme */
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  breakpoints,
  sizes,
  radii,
  shadows,
  borders,
  logos,
  spinnerColours: [
    colors.aqua,
    colors.coral,
    colors.cobalt,
    colors.ochre,
    'currentColor'
  ]
};

/**
 * @typedef {typeof baseTheme} FMPTheme
 */

/**
 * @param {FMPTheme | function(FMPTheme): FMPTheme} theme
 * @returns {React.FunctionComponent<{}>}
 */
export const themeProvider = theme => props => (
  <ThemeProvider theme={prev => ({ ...prev, ...theme })} {...props} />
);

export const BaseThemeProvider = themeProvider(baseTheme);
