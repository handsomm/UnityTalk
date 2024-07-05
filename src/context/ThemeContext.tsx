import { NativeModules } from 'react-native'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { themes } from '../themes';
import { Theme } from '../types';


type ThemeMode = 'light' | 'dark';

type ThemeContextProps= {
  mode: ThemeMode;
  theme: Theme;
  toggleMode: () => void;
  switchTheme: (newThemeName: keyof typeof themes) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  theme: themes.basic.light,
  toggleMode: () => null,
  switchTheme: () => null
})

export const ThemeProvider = ({children}:{
  children: ReactNode
}) => {
  const { ThemeModule } = NativeModules;
  const [theme, setTheme] = useState<Theme>(themes.basic.light); // Default theme and mode
  const [mode, setMode] = useState<ThemeMode>('light');
  const [themeName, setThemeName] = useState<keyof typeof themes>('basic');

  useEffect(() => {
    getStoredTheme();
  }, []);

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


  const contextVal: ThemeContextProps = {
    mode,
    theme,
    toggleMode,
    switchTheme
  }

  return (
    <ThemeContext.Provider value={contextVal}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);