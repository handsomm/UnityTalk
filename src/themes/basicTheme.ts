import {createTheme} from '@shopify/restyle';
import {baseTheme} from './baseTheme';
import {palette} from './palette';

export const lightTheme = createTheme({
  ...baseTheme,
  colors: {
    ...palette.light,
    primary: '#F3F4F6',
    secondary: '#D1D5DB',
    tertiary: '#4B5563',
    accent: '#0081CF',
    lightAccent: '#239bdb',
    tint: '#111827',

    // Chat Bubble Colors
    chatBubbleOutgoing: '#A1C4FF',
    chatBubbleIncoming: '#D1D9E6',

    // Status Bar Colors
    statusbar: '#0081cf',
    statusbarContent: '#F8FAFC',
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    ...palette.dark,
    primary: '#1F2937',
    secondary: '#374151',
    tertiary: '#9CA3AF',
    accent: '#0081CF',
    lightAccent: '#239bdb',
    tint: '#F9FAFB',

    // Chat Bubble Colors
    chatBubbleOutgoing: '#607D8B',
    chatBubbleIncoming: '#4C5C6C',

    // Status Bar Colors
    statusbar: '#0e354c',
    statusbarContent: '#F8FAFC',
  },
});

export const basicTheme = {light: lightTheme, dark: darkTheme};
