import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { ThemeProvider } from "@shopify/restyle";
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';
import { basicTheme } from '../themes/basicTheme';

const Routes = () => {
  const RootStack = createNativeStackNavigator();

  return (
    // <ThemeProvider theme={basicTheme.dark}>
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
    // </ThemeProvider>
  )
}

export default Routes

