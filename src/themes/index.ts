// theme/index.ts
import {basicTheme} from './basicTheme';
import { elegantTheme } from './elegantTheme';

export type ThemeCollection = Record<ThemeMode, Theme>;

export type Themes = {
  basic: ThemeCollection;
  elegant: ThemeCollection;
};

export const themes: Themes = {
  basic: basicTheme,
  elegant: elegantTheme,
};
