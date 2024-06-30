import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect } from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import useTheme from '../themes/useTheme';

type DrawerParamList = {
  Home: undefined;
  Setting: undefined;
};

const DrawerNavigator = () => {
  const DrawerNative = createDrawerNavigator<DrawerParamList>();
  const [theme, toggleMode, switchTheme, mode] = useTheme()
  console.log(mode, "mode")

  return (
    <NavigationContainer
      theme={{
        dark: mode === "dark",
        colors: {
          primary: theme.COLORS.primaryDarkGreyHex,
          background: theme.COLORS.primaryWhiteHex,
          card: theme.COLORS.primaryDarkGreyHex,
          text: theme.COLORS.primaryBlackHex,
          border: theme.COLORS.primaryBlackRGBA,
          notification: theme.COLORS.primaryRedHex,
        }
      }}
    >
      <DrawerNative.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            width: 250,
          },
          headerStyle: {
            backgroundColor: theme.COLORS.primaryBlackHex,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: 'blue',
          drawerLabelStyle: {
            color: '#111',
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
    </NavigationContainer>
  );
};

export default DrawerNavigator;