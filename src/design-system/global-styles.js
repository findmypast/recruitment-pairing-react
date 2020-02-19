/* stylelint-disable */
import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import FontFaceObserver from 'fontfaceobserver';
import { normalizeCSS } from './normalize-css';
import { fromTheme } from './theme-utils';

const fontObserver = new FontFaceObserver('azo-sans-web');

const boxSizing = css`
  html {
    box-sizing: border-box;
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
`;

const links = css`
  a {
    text-decoration: none;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
  a,
  a:visited,
  a:hover,
  a:focus {
    color: ${props => props.theme.colors.link};
  }
`;

const tables = css`
  th,
  td {
    padding: 0.2em 0.4em;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;

const typography = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  h1,
  .h1 {
    font-size: ${fromTheme.fontSizes.h1};
    font-weight: normal;
  }

  h2,
  .h2 {
    font-size: ${fromTheme.fontSizes.h2};
    font-weight: bold;
  }

  h3,
  .h3 {
    font-size: ${fromTheme.fontSizes.h3};
    font-weight: bold;
  }

  h4,
  .h4 {
    font-size: ${fromTheme.fontSizes.normal};
    font-weight: bold;
  }

  h5,
  .h5 {
    font-size: ${fromTheme.fontSizes.normal};
    font-weight: normal;
  }

  h6,
  .h6 {
    font-size: ${fromTheme.fontSizes.normal};
    font-style: italic;
    font-weight: normal;
  }
`;

const classicBodyFont = css`
  font-family: 'AvenirNext LT Pro regular', 'Avenir next', avenir-next, calibri,
    'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const bodyFont = css`
  ${({ fontLoaded }) =>
    fontLoaded
      ? css`
          font-family: azo-sans-web, Arial, sans-serif;
          letter-spacing: 0;
        `
      : css`
          font-family: Arial, sans-serif;
          letter-spacing: 0.35px;
        `};
`;

const GlobalStyleCSS = createGlobalStyle`
  ${normalizeCSS}
  ${boxSizing}
  ${links}
  ${tables}
  ${typography}
  [data-visually-hidden='true']:not(:focus):not(:active) {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
  }
  body {
    box-sizing: border-box !important;
    background: ${fromTheme.colors.background};
    font-size: 16px;
    line-height: 1.4;
    color: ${fromTheme.colors.primary};
    ${({ theme }) => (theme.isNewBrand ? bodyFont : classicBodyFont)}
  }
`;

export const GlobalStyle = React.memo(() => {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!fontLoaded) {
      fontObserver.load().then(() => {
        setFontLoaded(true);
      });
    }
  }, [fontLoaded]);
  return <GlobalStyleCSS fontLoaded={fontLoaded} />;
});
