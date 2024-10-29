import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { RouteProp } from '@react-navigation/native';
import TestScreen from '../screens/Test/TestScreen';
import SettingLayout from '../screens/Settings/SettingLayout';

export type StackParamList = {
  Settings: undefined;
  SettingLayout: {title?: string, childComponent: string};
  Test: undefined;
};

export type StackNavProps<T extends keyof StackParamList> = {
  navigation: NativeStackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
};


const StackNavigator = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SettingLayout" component={SettingLayout} options={{ headerShown: false }} />
      <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator