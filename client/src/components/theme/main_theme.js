//Backgrounds
import { headingBg } from './backgrounds';

import { animations } from './animations';

export const main_theme = {
  //Font Colors
  mainFontColor: '#020202',
  mainFontColorMedium: '#808080',
  mainFontColorMediumDark: '#595959',
  mainFontColorLight: '#a6a6a6',
  whiteFontColor: '#fafafa',
  secondaryFontColor: '#fa8072',
  fontWarningColor: '#F56960',
  fontSuccessColor: '#0EAD69',

  //Background Colors
  navigationBg: '#020202',
  footerBg: '#020202',

  //Typeography
  headerType: 'Merriweather Sans',
  bodyType: 'Inter',
  baseFontSize: '16px',

  //Box Shadows
  mainBoxShadow: '1px 1px 2px #8c8c8c',
  mainBoxShadowNoOff: '0px 0px 2px #b3b3b3',

  //Inputs
  inputBgAlt: '#e6e6e6',
  inputBgLight: '#f4f4f6',
  inputBorderRad: '3px',
  inputBoxShadow: '0px 0px 4px #e6e6e6',
  inputBorder: '1.5px solid #e6e6e6',
  inputBorderLight: '1.5px solid #a6a6a6',
  inputBorderActive: '1.5px solid #808080',
  inputFontSizeLg: '1em',
  inputFontSizeMd: '.95em',
  inputFontSizeSm: '.85em',

  //Buttons
  mainBtnBg: '#e6e6e6',
  mainBtnBgLight: '#a6a6a6',
  altBtnBg: '#fa8072',
  btnFontSizeLg: '1.2em',
  btnFontSizeMd: '.92em',
  btnFontSizeSm: '.85em',
  btnFontWeight: '600',
  btnMainFontColor: '#808080',
  btnFontColorWhite: '#fafafa',
  btnBorderHover: '#b3b3b3',
  btnSuccessBg: '#0EAD69',

  //Labels
  labelFontSize: '.95em',

  //Placeholder
  placeholderFontColor: '#808080',
  placeholderFontSize: '.82em',

  //Borders
  mainBorderColor: '#e6e6e6',
  borderSecondaryColor: '#fa8072',
  successBorderColor: '#0EAD69',
  warningBorderColor: '#F56960',
  altBorderColor: '#fa8072',
  borderRad: '3px',
  borderBottomColor: 'rgba(0,0,0,0.2)',

  //Hover Transition
  hoverTrans: '.3s ease all',

  //Animations
  animationTrans: '.3s ease',
  mainBezier: 'cubic-bezier(.53,1.28,.33,1.45)',
  fadeIn: animations.fade_in,
  bounceInLeft: animations.bounce_in_left,
  bounceInRight: animations.bounce_in_right,
  bounceInUp: animations.bounce_in_up,
  slideInLeft: animations.slide_in_left,
  slideInRight: animations.slide_in_right,

  //Icons
  mainIconColor: '#808080',
  mainnIconColorDark: '#020202',
  mainIconColorLight: '#B4B4B4',
  secondaryIconColor: `#fa8072`,
  secondaryIconColorLight: `#fdd3ce`,

  //Backgrounds
  heroBg: `${headingBg}`,
  headingBg: `${headingBg}`,
  bgDark: '#020202',
  headingBaseBgColor: '#e6e6e6',
  mainBgWhite: '#ffffff',
  altBgGrey: '#a6a6a6',
  successBg: '#0EAD69',
};
