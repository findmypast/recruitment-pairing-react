import styled from 'styled-components';
import * as SS from 'styled-system';

/** @type {import('styled-components').StyledComponent<"p", import('styled-components').DefaultTheme, SS.ColorProps & SS.TypographyProps, never>} */
export const Text = styled.p`
  ${SS.compose(SS.color, SS.typography)}
`;

/** @typedef {'primary' | 'secondary' | 'tertiary' | 'minor'} HeadingVariant */

/** @type {import('styled-components').StyledComponent<"p", import('styled-components').DefaultTheme, {variant?: HeadingVariant} & SS.ColorProps & SS.TypographyProps>} */
export const Heading = styled(Text)`
  ${SS.variant({
    variants: {
      primary: {
        fontSize: 'h1',
        fontWeight: 'bold',
        lineHeight: 'xwide',
      },
      secondary: {
        fontSize: 'h2',
        fontWeight: 'normal',
        lineHeight: 'xwide',
      },
      tertiary: {
        fontSize: 'h3',
        fontWeight: 'bold',
        lineHeight: 'wide',
      },
      minor: {
        fontSize: 'large',
        fontWeight: 'black',
        lineHeight: 'xxwide',
      },
    },
  })}
`;
