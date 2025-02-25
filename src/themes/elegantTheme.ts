import {createTheme} from '@shopify/restyle';
import {baseTheme} from './baseTheme';
import {palette} from './palette';

export const lightTheme = createTheme({
  ...baseTheme,
  colors: {
    ...palette.light,
    primary: '#EAEAEA',
    secondary: '#D1D5DB',
    tertiary: '#6B7280',
    accent: '#FF6F61',
    lightAccent: '#FF8E80',
    tint: '#2D3748',

    // Chat Bubble Colors
    chatBubbleOutgoing: '#FFEDD5',
    chatBubbleIncoming: '#E2E8F0',

    // Status Bar Colors
    statusbar: '#FF6F61',
    statusbarContent: '#F7FAFC',
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    ...palette.dark,
    primary: '#2D3748',
    secondary: '#4A5568',
    tertiary: '#CBD5E0',
    accent: '#FF6F61',
    lightAccent: '#FF8E80',
    tint: '#F7FAFC',

    // Chat Bubble Colors
    chatBubbleOutgoing: '#F7FAFC',
    chatBubbleIncoming: '#2D3748',

    // Status Bar Colors
    statusbar: '#FF6F61',
    statusbarContent: '#F7FAFC',
  },
});

export const elegantTheme = {light: lightTheme, dark: darkTheme};
