import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { ThemeProvider } from "@shopify/restyle";
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { basicTheme } from '../themes/basicTheme';
import { useTheme } from '../context/ColorSchemeContext';
import { themes } from '../themes';

const Routes = () => {
  const RootStack = createNativeStackNavigator();
  const { theme, mode, storedTheme } = useTheme();

  return (
    <ThemeProvider theme={mode === 'dark' ? themes[storedTheme].dark : themes[storedTheme].light}>
      <NavigationContainer
        theme={{
          dark: mode === 'dark',
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.primary,
            card: theme.colors.secondary,
            text: theme.colors.tint,
            border: theme.colors.secondary,
            notification: theme.colors.lightAccent,
          },
        }}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="HomeDrawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="StackScreens"
            component={StackNavigator}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes

