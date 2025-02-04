type Spacing = {
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

type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  lightAccent: string;
  tint: string;

  // Semantic Colors
  success: string;
  warning: string;
  info: string;
  danger: string;

  // Neutral Colors
  white: string;
  black: string;
  gray: string;
  gray100: string;
  gray200: string;
  gray400: string;
  gray600: string;

  // Chat Bubble Colors
  chatBubbleOutgoing: string;
  chatBubbleIncoming: string;

  // Status Bar Colors
  statusbar: string;
};

type FontFamily = {
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

type FontSize = {
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

type BorderRadius = {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
  radius_30: number;
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
  icon: IconType;
};

type IconType =
  | 'envelope-open'
  | 'envelope-close'
  | 'send'
  | 'heart'
  | 'heart-fill'
  | 'bell-slash'
  | 'bell-slash-fill'
  | 'bell'
  | 'bell-fill'
  | 'offline'
  | 'cheveron-down'
  | 'cheveron-up'
  | 'cheveron-left'
  | 'cheveron-right'
  | 'close'
  | 'home'
  | 'chat'
  | 'group-chat'
  | 'user'
  | 'spinner'
  | 'lock'
  | 'unlock'
  | 'gear'
  | 'signout'
  | 'light'
  | 'dark'
  | 'shield'
  | 'world'
  | 'chart-pie'
  | 'folder'
  | 'folder-fill'
  | 'file-text'
  | 'volume-0'
  | 'volume-1'
  | 'volume-2'
  | 'volume-3'
  | 'volume-mute'
  | 'volume-up'
  | 'volume-down'
  | 'info-fill';

type ChatItem = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unreadCount: number;
};
