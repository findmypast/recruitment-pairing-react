/** @typedef {[string, string, string, string]} AccentColor */
/**
 * @typedef {object} Colours
 * @property {string} primary
 * A dark indigo used for text and primary CTAs on light backgrounds
 * @property {object} accent
 * For splashes of colour on a page
 * @property {AccentColor} accent.coral
 * @property {AccentColor} accent.ochre
 * @property {AccentColor} accent.aqua
 * @property {AccentColor} accent.cobalt
 * @property {AccentColor} accent.link
 * Reserved for inline links and minor CTAs.
 * @property {AccentColor} accent.discovery
 * Reserved for things related to hints / automated discoveries.
 * @property {object} communication
 * @property {string} communication.error
 * Used when we need to call attention to a message to the user
 * @property {string} communication.alert
 * @property {[string, string, string]} neutral
 * Neutral cream colours used for backgrounds
 * @property {[string, string, string, string, string]} shade
 * Shades of grey used primarily for box shadows
 */

/** @type {Colours} */
export const newBrandColours = {
  primary: '#242048',
  accent: {
    coral: ['#e6716e', '#eb8d8b', '#f2b8b6', '#fae2e2'],
    ochre: ['#E2AA19', '#E8BB47', '#F0D48C', '#f9eed1'],
    aqua: ['#60A38E', '#80B5A5', '#BFDAD2', '#dfece8'],
    cobalt: ['#5C88C6', '#7DA0D1', '#ADC3E2', '#eff3f9'],
    link: ['#5678A2', '#7793b4', '#aabbd0', '#dde4ec'],
    discovery: ['#df9158', '#e8b28a', '#efc8ab', '#f8e9dd']
  },
  communication: {
    error: '#d5383a',
    alert: '#f4ca64'
  },
  neutral: ['#2e2c25', '#dcd7d2', '#f3f0ec'],
  shade: ['#000000', '#4a4a4a', '#7c7c7c', '#f7f7f7', '#ffffff']
};

const brandColors = {
  indigo: newBrandColours.primary,
  coral: newBrandColours.accent.coral[0],
  coral80: newBrandColours.accent.coral[1],
  coral50: newBrandColours.accent.coral[2],
  coral20: newBrandColours.accent.coral[3],
  ochre: newBrandColours.accent.ochre[0],
  ochre80: newBrandColours.accent.ochre[1],
  ochre50: newBrandColours.accent.ochre[2],
  ochre20: newBrandColours.accent.ochre[3],
  aqua: newBrandColours.accent.aqua[0],
  aqua80: newBrandColours.accent.aqua[1],
  aqua50: newBrandColours.accent.aqua[2],
  aqua20: newBrandColours.accent.aqua[3],
  cobalt: newBrandColours.accent.cobalt[0],
  cobalt80: newBrandColours.accent.cobalt[1],
  cobalt50: newBrandColours.accent.cobalt[2],
  cobalt20: newBrandColours.accent.cobalt[3],
  discovery: newBrandColours.accent.discovery[0],
  discovery80: newBrandColours.accent.discovery[1],
  discovery50: newBrandColours.accent.discovery[2],
  discovery20: newBrandColours.accent.discovery[3]
};

const communicationColors = {
  error: newBrandColours.communication.error,
  alert: newBrandColours.communication.alert,
  link: newBrandColours.accent.link[0],
  link80: newBrandColours.accent.link[1],
  link50: newBrandColours.accent.link[2],
  link20: newBrandColours.accent.link[3]
};

const neutralColors = {
  cream: newBrandColours.neutral[2],
  neutralMid: newBrandColours.neutral[1],
  neutralDark: newBrandColours.neutral[0],
  black: newBrandColours.shade[0],
  white: newBrandColours.shade[4],
  grey80: newBrandColours.shade[1],
  grey50: newBrandColours.shade[2],
  grey20: newBrandColours.shade[3]
};

const treeColors = {
  /** Tree colors */
  male: brandColors.cobalt,
  female: brandColors.coral,
  ungendered: brandColors.ochre,
  treeNode: neutralColors.white,
  treeNodeText: brandColors.indigo,
  treeNodeBorder: brandColors.cobalt,
  treeNodeSelected: brandColors.cobalt50,
  treeNodeCurrent: brandColors.indigo,
  treeNodeCurrentText: neutralColors.cream,
  treeNodeCurrentBorder: brandColors.indigo,
  treeNodePreview: brandColors.aqua50
};

const contextualColors = {
  /** Contextual colours, these may change in parts of the app */
  button: brandColors.indigo,
  buttonHover: communicationColors.link,
  primary: brandColors.indigo,
  secondary: brandColors.indigo,
  background: neutralColors.cream,
  accent: brandColors.coral,
  accentContrast: brandColors.indigo,
  progressBar: brandColors.aqua
};

export const colors = {
  ...brandColors,
  ...communicationColors,
  ...neutralColors,
  ...treeColors,
  ...contextualColors
};
