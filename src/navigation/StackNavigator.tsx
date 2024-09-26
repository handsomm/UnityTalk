import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { RouteProp } from '@react-navigation/native';
import TestScreen from '../screens/Test/TestScreen';

export type StackParamList = {
  Settings: undefined;
  Test: undefined;
};

export type StackNavProps = {
  navigation: NativeStackNavigationProp<StackParamList>;
  route: RouteProp<StackParamList, keyof StackParamList>;
};


const StackNavigator = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator