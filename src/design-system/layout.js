import React from 'react';
import styled, { css } from 'styled-components';
import { range } from 'lodash';
import * as SS from 'styled-system';
import { Box } from './box';

/**
 * @typedef {object} FlexWrapperProps
 * @property {SS.ResponsiveValue<SS.TLengthStyledSystem>} [space]
 * The space between items in the wrapper, uses the "space" scale from the theme.
 * @property {SS.ResponsiveValue<number[]>} [sizes]
 * The proportional sizes of children, i.e. their `flex-grow` property.
 * If there are more children than elements in the sizes array their proportion
 * defaults to 1.
 */

/** @type {import('styled-components').StyledComponent<Box, import('styled-components').DefaultTheme, FlexWrapperProps, never>} */
export const FlexWrapper = styled(Box)`
  ${SS.system({
    space: {
      property: 'margin',
      scale: 'space',
      transform: (value, scale) => `calc(-${scale[value]}/2)`,
    },
  })};
  > ${() => FlexItem} {
    ${SS.system({
      space: {
        property: 'padding',
        scale: 'space',
        transform: (value, scale) => `calc(${scale[value]}/2)`,
      },
    })}
  }
  ${props =>
    props.sizes &&
    range(6).map(
      i => css`
    > ${() => FlexItem}:nth-child(${i + 1}) {
      ${SS.system({
        sizes: {
          property: 'flex-grow',
          transform: value => value[i]?.toString(),
        },
      })}
    }
  `
    )}
`;
FlexWrapper.defaultProps = {
  display: 'flex',
  overflow: 'visible',
};

/** @type {import('styled-components').StyledComponent<Box, import('styled-components').DefaultTheme, {}, never>} */
export const FlexItem = styled(Box)(
  SS.system({
    number: {
      property: 'flex',
      transform: value => {
        if (value === 'auto') return '1 1 0px';
        if (typeof value === 'number') return `1 1 ${100 / value}%`;
      },
    },
  })
);
FlexItem.defaultProps = {
  minWidth: '0px',
};

/**
 * @typedef {object} ColumnsProps
 * @property {SS.ResponsiveValue<number | 'auto'>} [number="auto"]
 * Number of columns
 */

/** @type {React.FC<React.ComponentPropsWithoutRef<typeof FlexWrapper> & ColumnsProps>} */
export const Columns = ({
  space,
  sizes = [],
  number = 'auto',
  children,
  ...props
}) => {
  return (
    <FlexWrapper
      flexWrap="wrap"
      alignItems="stretch"
      space={space}
      sizes={sizes}
      {...props}
    >
      {React.Children.map(children, child =>
        child !== null && child !== undefined ? (
          <FlexItem number={number}>{child}</FlexItem>
        ) : null
      )}
    </FlexWrapper>
  );
};
Columns.defaultProps = {
  space: 2,
};

/** @type {React.FC<React.ComponentPropsWithoutRef<typeof FlexWrapper>>} */
export const Inline = ({ space, children, ...props }) => {
  return (
    <FlexWrapper alignItems="center" flexWrap="wrap" space={space} {...props}>
      {React.Children.map(children, child =>
        child !== null && child !== undefined ? (
          <FlexItem flex="0 0 auto">{child}</FlexItem>
        ) : null
      )}
    </FlexWrapper>
  );
};
Inline.defaultProps = {
  space: 2,
};

/**
 * @typedef {object} StackProps
 * @property {boolean} [withDividers]
 * Whether to insert dividers between stack items
 */

/** @type {React.FC<React.ComponentPropsWithoutRef<typeof FlexWrapper> & StackProps>} */
export const Stack = ({ space, children, as, withDividers, ...props }) => {
  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="stretch"
      space={space}
      as={as}
      {...props}
    >
      {React.Children.toArray(children).map((child, index, array) => {
        if (!child) return null;
        return (
          <React.Fragment key={index}>
            <FlexItem
              as={as === 'ul' || as === 'ol' ? 'li' : 'div'}
              flex="0 0 auto"
            >
              {child}
            </FlexItem>
            {withDividers && index !== array.length - 1 && (
              <FlexItem
                as={as === 'ul' || as === 'ol' ? 'li' : 'div'}
                flex="0 0 auto"
                aria-hidden
              >
                <Box as="hr" borderTop="subtle" />
              </FlexItem>
            )}
          </React.Fragment>
        );
      })}
    </FlexWrapper>
  );
};
Stack.defaultProps = {
  space: 2,
};
