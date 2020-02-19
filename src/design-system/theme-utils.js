import { baseTheme } from './base-theme';

class ThemeAccessor {
  constructor(theme) {
    for (const category of Object.keys(theme)) {
      this[category] = {};
      for (const property of Object.keys(theme[category])) {
        this[category][property] = props => props.theme[category][property];
      }
    }
  }
}

/** @type {{[C in keyof typeof baseTheme]: {[P in keyof typeof baseTheme[C]: import('styled-components').InterpolationFunction<any>]}}} */
export const fromTheme = new ThemeAccessor(baseTheme);
