import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import DrawerNavigator from './DrawerNavigator';
import StackNavigator from './StackNavigator';

const Routes = () => {
  const RootStack = createNativeStackNavigator();

  return (
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
  )
}

export default Routes

