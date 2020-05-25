import { colors } from './colors';

const SHADOW_COLOUR = 'rgba(45, 43, 36, 0.2)';

export const shadows = {
  low: `0 0 5px 0 ${SHADOW_COLOUR}`,
  medium: `0 0 20px 0 ${SHADOW_COLOUR}`,
};

export const radii = {
  none: '0px',
  box: '4px',
  card: '8px',
  button: '9999px',
  circle: '50%',
};

export const borders = {
  subtle: `solid 1px ${colors.neutralMid}`,
};

export const sizes = {
  button: '2.5rem',
};
