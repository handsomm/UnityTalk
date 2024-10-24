export type Spacing = {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
};

export type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  tint: string;
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  secondaryDarkGreyHex: string;
  primaryGreyHex: string;
  secondaryGreyHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryBlackRGBA: string;
  secondaryBlackRGBA: string;
  successHex: string;
  warningHex: string;
  infoHex: string;
  dangerHex: string;

  primaryPurple: string;
};

export type FontFamily = {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
};

export type FontSize = {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
  size_32: number;
  size_34: number;
};

export type BorderRadius = {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
};

type Theme = {
  SPACING: Spacing;
  COLORS: Color;
  FONTFAMILY: FontFamily;
  FONTSIZE: FontSize;
  BORDERRADIUS: BorderRadius;
};

type Themes = {
  light: Theme;
  dark: Theme;
};

type DrawerItems = {
  name: string;
  icon: string;
}