import { NativeModules } from 'react-native';

const { ThemeManager } = NativeModules;

const setTheme = (themeName: string) => {
  return ThemeManager.setTheme(themeName);
};

const getTheme = () => {
  return ThemeManager.getTheme();
};

export { setTheme, getTheme };
