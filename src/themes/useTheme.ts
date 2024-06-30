import { useState, useEffect } from 'react';
import { NativeModules } from 'react-native';
import { themes } from './index';
import { Theme } from '../types';

const { ThemeModule } = NativeModules;

type ThemeMode = 'light' | 'dark';

const useTheme = (): [Theme, () => void, (themeName: keyof typeof themes) => void, mode: ThemeMode] => {
  const [theme, setTheme] = useState<Theme>(themes.basic.light); // Default theme and mode
  const [themeName, setThemeName] = useState<keyof typeof themes>('basic');
  const [mode, setMode] = useState<ThemeMode>('light');

  const getStoredTheme = async () => {
    try {
      const storedThemeJson = await ThemeModule.getTheme();
      const storedTheme = JSON.parse(storedThemeJson);
      const storedThemeName = storedTheme.theme as keyof typeof themes;
      const storedMode = storedTheme.mode as ThemeMode;

      setThemeName(storedThemeName);
      setMode(storedMode);
      setTheme(themes[storedThemeName][storedMode]);
    } catch (error) {
      console.error('Failed to load theme', error);
    }
  };

  const toggleMode = async () => {
    try {
      const newMode: ThemeMode = mode === 'dark' ? 'light' : 'dark';
      setMode(newMode);
      const newTheme = themes[themeName][newMode];
      setTheme(newTheme);
      await ThemeModule.setTheme(themeName, newMode);
    } catch (error) {
      console.error('Failed to toggle mode', error);
    }
  };

  const switchTheme = async (newThemeName: keyof typeof themes) => {
    try {
      setThemeName(newThemeName);
      const newTheme = themes[newThemeName][mode];
      setTheme(newTheme);
      await ThemeModule.setTheme(newThemeName, mode);
    } catch (error) {
      console.error('Failed to switch theme', error);
    }
  };

  useEffect(() => {
    getStoredTheme();
  }, []);

  return [theme, toggleMode, switchTheme, mode];
};

export default useTheme;
