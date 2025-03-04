import { createContext, useCallback, useContext, useEffect, useReducer, useState, type ReactNode } from "react";
import { Appearance, View, NativeModules, StatusBar, Text } from "react-native";
import { themes } from "../themes";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export type ThemeMode = "light" | "dark";

interface ColorScheme {
  active: boolean;
  statusBarStyle: ThemeMode;
  mode: ThemeMode;
}

interface ThemeConfig {
  theme: Theme;
  storedTheme: keyof typeof themes | "basic";
}


interface ColorSchemeContext extends ColorScheme, ThemeConfig {
  dispatch: (scheme: Partial<ColorScheme>) => void;
  setTheme: (theme: Partial<ThemeConfig>) => void;
  switchTheme: (newThemeName: keyof typeof themes) => Promise<void>;
  setMode: (mode: ThemeMode | 'system') => void;
}

const defaultColorScheme: ColorScheme = {
  active: false,
  statusBarStyle: (Appearance.getColorScheme() ?? "light") === "dark" ? "light" : "dark",
  mode: (Appearance.getColorScheme() ?? "light") as ThemeMode,
};

const defaultTheme: ThemeConfig = {
  theme: themes["basic"].light || (null as unknown as Theme),
  storedTheme: "basic",
};


const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

const colorSchemeReducer = (state: ColorScheme, newValues: Partial<ColorScheme>) => ({
  ...state,
  ...newValues,
});

const themeReducer = (state: ThemeConfig, newValues: Partial<ThemeConfig>) => ({
  ...state,
  ...newValues,
});


export const useTheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error("No ColorScheme context found");
  }

  const { mode, theme, dispatch, setTheme, active, switchTheme, setMode, storedTheme } = ctx;

  const toggle = useCallback(
    async () => {
      const newColorScheme = mode === "light" ? "dark" : "light";
      dispatch({ mode: newColorScheme });
      setMode(newColorScheme);
    },
    [mode, dispatch,]
  );


  return { mode, theme, toggle, active, setTheme, switchTheme, setMode, storedTheme, dispatch, wait };
};

interface ColorSchemeProviderProps {
  children: ReactNode;
}

export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const { ThemeModule } = NativeModules;
  const [colorSchemeState, dispatch] = useReducer(colorSchemeReducer, defaultColorScheme);
  const [themeState, setTheme] = useReducer(themeReducer, defaultTheme);

  const [isReady, setIsReady] = useState(false);
  const systemColorScheme = Appearance.getColorScheme() || "light";

  const getStoredTheme = async () => {
    try {
      const storedThemeJson = await ThemeModule.getTheme();
      if (!storedThemeJson) {
        console.log("No stored theme found, using default");
        setIsReady(true);
        return;
      }

      const savedTheme = JSON.parse(storedThemeJson);
      const storedThemeName = savedTheme.theme as keyof typeof themes;
      const storedMode = savedTheme.mode as ThemeMode | "system";
      const resolvedMode = storedMode === "system" ? systemColorScheme : storedMode;

      setTheme({ theme: themes[storedThemeName][resolvedMode], storedTheme: storedThemeName });

      dispatch({
        mode: resolvedMode,
        statusBarStyle: resolvedMode === "dark" ? "light" : "dark",
      });

      setIsReady(true);
    } catch (error) {
      console.error("Failed to load theme", error);
      setIsReady(true);
    }
  };


  const switchTheme = async (newThemeName: keyof typeof themes) => {
    try {
      const systemTheme = Appearance.getColorScheme()
      const newTheme = themes[newThemeName][systemTheme as ThemeMode];

      setTheme({ theme: newTheme, storedTheme: newThemeName });

      console.log("Saving theme:", newThemeName, "Mode:", systemTheme as ThemeMode);
      await ThemeModule.setTheme(newThemeName, systemTheme as ThemeMode);
    } catch (error) {
      console.error("Failed to switch theme", error);
    }
  };

  const setMode = async (mode: ThemeMode | "system") => {
    try {
      if (mode === "system") {
        const systemTheme = Appearance.getColorScheme() || "light";

        dispatch({ mode: systemTheme });

        const newTheme = themes[themeState.storedTheme][systemTheme];
        setTheme({ theme: newTheme });

        console.log(`Switched to system mode: ${systemTheme}`);

        await ThemeModule.setTheme(themeState.storedTheme, "system");
        return;
      }

      dispatch({ mode: mode });

      const newTheme = themes[themeState.storedTheme][mode];
      setTheme({ theme: newTheme });

      await ThemeModule.setTheme(themeState.storedTheme, mode);
    } catch (error) {
      console.error("Failed to set theme mode", error);
    }
  };




  useEffect(() => {
    getStoredTheme();
    // Listen for system theme changes
    const subscription = Appearance.addChangeListener(async ({ colorScheme }) => {
      try {
        const storedThemeJson = await ThemeModule.getTheme();
        if (!storedThemeJson) {
          console.log("No stored theme found, using default");
          return;
        }

        const savedTheme = JSON.parse(storedThemeJson);
        const storedThemeName = savedTheme.theme as keyof typeof themes;
        const storedMode = savedTheme.mode as ThemeMode | "system";

        if (storedMode === "system" && (colorScheme === "dark" || colorScheme === "light")) {
          dispatch({ mode: colorScheme });

          // Apply new theme based on system preference
          const newTheme = themes[storedThemeName][colorScheme];
          setTheme({ theme: newTheme });
        }
      } catch (error) {
        console.error("Error handling system theme change:", error);
      }
    });

    return () => subscription.remove();
  }, []);




  // Don't render anything until the theme is ready to avoid the flicker
  if (!isReady) {
    return (
      <View style={{ flex: 1, backgroundColor: "rgba(0, 255, 217, 0.1)", justifyContent: "center", alignItems: "center" }}>
        <StatusBar backgroundColor="rgba(0, 255, 217, 0.1)" barStyle="dark-content" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor={themeState.theme.colors.statusbar} barStyle={colorSchemeState.mode === 'dark' ? "light-content" : 'light-content'} /> */}
      <ColorSchemeContext.Provider
        value={{
          ...colorSchemeState,
          ...themeState,
          dispatch,
          setTheme,
          switchTheme,
          setMode
        }}
      >
        {children}
      </ColorSchemeContext.Provider>
    </View>
  );
};
