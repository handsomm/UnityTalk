import {Appearance, NativeModules} from 'react-native';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {themes} from '../themes';
import {Theme} from '../types';

type ThemeMode = 'light' | 'dark';

type ThemeContextProps = {
  mode: ThemeMode | 'system';
  theme: Theme;
  toggleMode: () => void;
  switchTheme: (newThemeName: keyof typeof themes) => void;
  setThemeMode: (mode: ThemeMode, _flag?: ThemeMode | string) => void;
};
export const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  theme: themes.basic.light,
  toggleMode: () => null,
  switchTheme: () => null,
  setThemeMode: () => null,
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const {ThemeModule} = NativeModules;
  const [theme, setTheme] = useState<Theme>(themes.basic.light); // Default theme and mode
  const [mode, setMode] = useState<ThemeMode | 'system'>('light');
  const [themeName, setThemeName] = useState<keyof typeof themes>('basic');
  const systemColorScheme = Appearance.getColorScheme() || 'light';

  useEffect(() => {
    getStoredTheme();
  }, []);

  const getStoredTheme = async () => {
    try {
      const storedThemeJson = await ThemeModule.getTheme();
      const storedTheme = JSON.parse(storedThemeJson);
      const storedThemeName = storedTheme.theme as keyof typeof themes;
      const storedMode = storedTheme.mode as ThemeMode | 'system';

      setThemeName(storedThemeName);
      setMode(storedMode);

      if (storedMode === 'system') {
        setTheme(themes[storedThemeName][systemColorScheme]);
        Appearance.addChangeListener(({colorScheme}) => {
          setMode(colorScheme as ThemeMode);
          setTheme(themes[storedThemeName][colorScheme as ThemeMode]);
        });
        return;
      }

      setTheme(themes[storedThemeName][storedMode]);
    } catch (error) {
      console.error('Failed to load theme', error);
    }
  };

  const toggleMode = async () => {
    try {
      if (mode === 'system') {
        setMode(systemColorScheme === 'dark' ? 'light' : 'dark');
        const newTheme =
          themes[themeName][systemColorScheme === 'dark' ? 'light' : 'light'];
        setTheme(newTheme);
        return;
      }
      const newMode: ThemeMode = mode === 'dark' ? 'light' : 'dark';
      setMode(newMode);
      const newTheme = themes[themeName][newMode];
      setTheme(newTheme);
      // await ThemeModule.setTheme(themeName, newMode);
    } catch (error) {
      console.error('Failed to toggle mode', error);
    }
  };

  const setThemeMode = async (mode: ThemeMode, _flag?: ThemeMode | string) => {
    try {
      if (_flag !== 'system') {
        setMode(mode);
        const newTheme = themes[themeName][mode];
        setTheme(newTheme);
        await ThemeModule.setTheme(themeName, mode);
        return;
      }
      setMode(systemColorScheme);
      const newTheme = themes[themeName][systemColorScheme];
      setTheme(newTheme);
      await ThemeModule.setTheme(themeName, 'system');
    } catch (error) {
      console.error('Failed to set theme mode', error);
    }
  };

  const switchTheme = async (newThemeName: keyof typeof themes) => {
    try {
      setThemeName(newThemeName);
      const newTheme = themes[newThemeName][mode as ThemeMode];
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
    switchTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={contextVal}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
