import {createTheme} from '@shopify/restyle';
import {baseTheme} from './baseTheme';
import {palette} from './palette';

export const lightTheme: Theme = createTheme({
  ...baseTheme,
  colors: {
    ...palette.light,
    primary: '#F3F4F6',
    secondary: '#D1D5DB',
    tertiary: '#4B5563',
    accent: '#0081CF',
    lightAccent: '#76d1f5',
    tint: '#111827',

    // Chat Bubble Colors
    chatBubbleOutgoing: '#A1C4FF',
    chatBubbleIncoming: '#D1D9E6',

    // Status Bar Colors
    statusbar: '#0081cf',
    statusbarContent: '#F8FAFC',
  },
});

export const darkTheme: Theme = createTheme({
  ...baseTheme,
  colors: {
    ...palette.dark,
    primary: '#1F2937',
    secondary: '#374151',
    tertiary: '#9CA3AF',
    accent: '#0081CF',
    lightAccent: '#1B516E',
    tint: '#F9FAFB',

    // Chat Bubble Colors
    chatBubbleOutgoing: '#607D8B',
    chatBubbleIncoming: '#4C5C6C',

    // Status Bar Colors
    statusbar: '#0e354c',
    statusbarContent: '#F8FAFC',
  },
});

export const basicTheme: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
