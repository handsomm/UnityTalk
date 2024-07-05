import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import {useTheme} from '../context/ThemeContext';

type DrawerParamList = {
  Home: undefined;
  Setting: undefined;
};

const DrawerNavigator = () => {
  const DrawerNative = createDrawerNavigator<DrawerParamList>();
  const {theme, mode} = useTheme();

  return (
    <DrawerNative.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme.COLORS.primaryWhiteHex,
          width: 250,
        },
        headerStyle: {
          backgroundColor: theme.COLORS.primaryBlackHex,
        },
        headerTintColor: theme.COLORS.primaryWhiteHex,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'blue',
        drawerLabelStyle: {
          color: theme.COLORS.primaryBlackHex,
        },
      }}>
      <DrawerNative.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   drawerLabel: "Home",
        //   title: "UnityTalk",
        // }}
      />
      <DrawerNative.Screen name="Setting" component={SettingsScreen} />
    </DrawerNative.Navigator>
  );
};

export default DrawerNavigator;
