import React from 'react';
import styled, { css } from 'styled-components';
import { system, color, border } from 'styled-system';
import { useSpring, animated } from 'react-spring';
import { without, uniqueId } from 'lodash';
import { Box } from './box';

const primaryTextColor = props => {
  if (!props.theme.isNewBrand) {
    return props.theme.colors.white;
  } else if (props.accent && !(props.accent === 'link')) {
    return props.theme.colors.indigo;
  } else {
    return props.theme.colors.cream;
  }
};
const primaryBackgroundColor = props =>
  props.accent ? props.theme.colors[props.accent] : props.theme.colors.button;
const primaryButtonStyles = css`
  border: none;
  background-color: ${primaryBackgroundColor};
  color: ${primaryTextColor};
  :hover,
  :focus,
  :active,
  :visited {
    color: ${primaryTextColor};
  }
  :hover:not([disabled]) {
    background-color: ${props =>
      props.accent
        ? props.theme.colors[props.accent + '80']
        : props.theme.colors.buttonHover};
    box-shadow: ${props => props.theme.isNewBrand && props.theme.shadows.low};
  }
  :active {
    box-shadow: none;
    transition: none;
  }
  &[disabled] {
    color: ${props => props.theme.colors.neutralMid};
    background-color: ${props => props.theme.colors.grey50};
  }
  transition: all 0.2s ease-in-out;
`;

const secondaryTextColor = props =>
  props.accent ? props.theme.colors[props.accent] : props.theme.colors.button;
const secondaryButtonStyles = css`
  color: ${secondaryTextColor};
  border: 1px solid currentColor;
  background: none;
  :hover,
  :focus,
  :active,
  :visited {
    color: ${secondaryTextColor};
  }
  :hover:not([disabled]) {
    background-color: ${primaryBackgroundColor};
    color: ${primaryTextColor};
    border-color: ${primaryBackgroundColor};
    box-shadow: ${props => props.theme.isNewBrand && props.theme.shadows.low};
  }
  :active {
    box-shadow: none;
    transition: none;
  }
  &[disabled] {
    color: ${props => props.theme.colors.neutralMid};
  }
  ${props =>
    !props.theme.isNewBrand &&
    css`
      :hover:not([disabled]) {
        color: ${props => props.theme.colors.buttonHover};
        background: none;
        border-color: currentColor;
        box-shadow: none;
      }
    `}
  transition: all 0.2s ease-in-out;
`;

const BaseButton = styled(Box)`
  overflow: hidden;
  white-space: nowrap;
  ${props =>
    !props.bare &&
    (props.primary ? primaryButtonStyles : secondaryButtonStyles)};
  ${system({
    height: { property: 'lineHeight', scale: 'sizes' }
  })}
  ${color}
  ${border}
`;

const RippleBase = styled(animated.div)`
  ${props => !props.theme.isNewBrand && 'display: none'};
  pointer-events: none;
  border-radius: 50%;
  background: white;
  position: absolute;
`;

const Ripple = ({ offsetX, offsetY, ...props }) => {
  const animation = useSpring({
    from: {
      width: 0,
      opacity: 1
    },
    to: {
      width: 200,
      opacity: 0
    }
  });
  return (
    <RippleBase
      style={{
        left: animation.width.interpolate(width => offsetX - width / 2),
        top: animation.width.interpolate(width => offsetY - width / 2),
        height: animation.width,
        ...animation
      }}
      {...props}
    />
  );
};

/**
 * @typedef {object} ButtonProps
 * @property {boolean} [primary]
 * Whether to render the button as a primary (solid) button. There should usually
 * be just one primary button in a control.
 * @property {string} [accent]
 * Colour of the button. Uses the "color" scale from the theme.
 */

/** @type {React.FunctionComponent<ButtonProps & React.ComponentProps<typeof Box> & React.HTMLProps<HTMLButtonElement>>} */
export const Button = ({ children, onMouseDown, ...props }) => {
  const [ripples, setRipples] = React.useState([]);
  const rippleTimeouts = React.useRef([]);
  const addRipple = React.useCallback(newRipple => {
    setRipples(ripples => [...ripples, newRipple]);
    rippleTimeouts.current.push(
      setTimeout(() => setRipples(ripples => without(ripples, newRipple)), 2000)
    );
  }, []);
  React.useEffect(() => {
    const timeouts = rippleTimeouts.current;
    return () => {
      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    };
  }, []);
  return (
    <BaseButton
      position="relative"
      display="block"
      textAlign="center"
      borderRadius="button"
      paddingX={3}
      width="100%"
      height="button"
      as="button"
      onMouseDown={e => {
        addRipple({
          offsetX: e.nativeEvent.offsetX,
          offsetY: e.nativeEvent.offsetY,
          id: uniqueId()
        });
        typeof onMouseDown === 'function' && onMouseDown(e);
      }}
      {...props}
    >
      {ripples.map(({ id, offsetX, offsetY }) => (
        <Ripple key={id} offsetX={offsetX} offsetY={offsetY} />
      ))}
      <span
        css={`
          position: relative;
          pointer-events: none;
        `}
      >
        {children}
      </span>
    </BaseButton>
  );
};
