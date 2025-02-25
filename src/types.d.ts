type Spacing = {
  space2: number;
  space4: number;
  space8: number;
  space10: number;
  space12: number;
  space15: number;
  space16: number;
  space18: number;
  space20: number;
  space24: number;
  space28: number;
  space30: number;
  space32: number;
  space36: number;
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
  statusbarContent: string;
};

type FontFamily = {
  poppinsBlack: string;
  poppinsBold: string;
  poppinsExtrabold: string;
  poppinsExtralight: string;
  poppinsLight: string;
  poppinsMedium: string;
  poppinsRegular: string;
  poppinsSemibold: string;
  poppinsThin: string;
};

type FontSize = {
  size8: number;
  size10: number;
  size12: number;
  size14: number;
  size16: number;
  size18: number;
  size20: number;
  size24: number;
  size28: number;
  size30: number;
  size32: number;
  size34: number;
};

type BorderRadius = {
  radius4: number;
  radius8: number;
  radius10: number;
  radius15: number;
  radius20: number;
  radius25: number;
  radius30: number;
};

type Theme = {
  spacing: Spacing;
  colors: Color;
  fontFamily: FontFamily;
  fontSizes: FontSize;
  borderRadii: BorderRadius;
};

type ThemeMode = {
  light: Theme;
  dark: Theme;
  system: Theme;
};

type Themes = 'basic' | 'elegant';


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
