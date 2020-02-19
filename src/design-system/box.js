import styled from 'styled-components';
import * as SS from 'styled-system';

/** @typedef {SS.ColorProps & SS.BorderProps & SS.SpaceProps & SS.SpaceProps & SS.LayoutProps & SS.ShadowProps & SS.PositionProps & SS.TypographyProps & SS.FlexboxProps & SS.GridProps} BoxProps */

/** @type {import('styled-components').StyledComponent<"div", import('styled-components').DefaultTheme, BoxProps, never>} */
export const Box = styled.div`
  /** 
   * The following is a reset to make sure a Box displays the same regardless
   * of the underlying element.
   */
  appearance: none;
  border: none;
  background: none;
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  &:visited,
  &:hover,
  &:focus {
    text-decoration: none;
    ${SS.system({
      color: {
        property: 'color',
        scale: 'colors',
      },
      textDecoration: {
        property: 'textDecoration',
      },
    })}
  }

  ${SS.compose(
    SS.color,
    SS.border,
    SS.space,
    SS.layout,
    SS.shadow,
    SS.position,
    SS.typography,
    SS.flexbox,
    SS.grid
  )}
`;
Box.defaultProps = {
  borderRadius: 'box',
};
