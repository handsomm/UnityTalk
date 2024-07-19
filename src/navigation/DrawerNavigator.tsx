import {DrawerItemList, DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import {useTheme} from '../context/ThemeContext';
import CustomIcon from '../components/CustomIcon';
import {TouchableOpacity, View} from 'react-native';
import CustomHeader from '../components/CustomHeader';

type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

const DrawerNavigator = () => {
  const DrawerNative = createDrawerNavigator<DrawerParamList>();
  const {theme} = useTheme();

  return (
    <DrawerNative.Navigator
      initialRouteName="Home"
      screenOptions={({navigation}: {navigation: DrawerNavigationProp<DrawerParamList>}) => ({
        drawerStyle: {
          backgroundColor: theme.COLORS.primary,
          width: 250,
        },
        headerStyle: {
          backgroundColor: theme.COLORS.primary,
        },
        headerTintColor: theme.COLORS.tint,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: theme.COLORS.accent,
        drawerLabelStyle: {
          color: theme.COLORS.primaryBlackHex,
        },
        headerLeft: (props) => {
          return (
            <TouchableOpacity
              style={{width: 38, justifyContent:'space-between', gap: 4, marginLeft: 12, padding: 5}}
              onPress={navigation.toggleDrawer}>
                <View style={{width: '100%', height: theme.SPACING.space_4, backgroundColor:theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4}} />
                <View style={{width: '70%', height: theme.SPACING.space_4, backgroundColor:theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4}} />
                <View style={{width: '85%', height:theme.SPACING.space_4, backgroundColor:theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4}} />
            </TouchableOpacity>
          );
        },
        headerTitle: (props) => <CustomHeader title={props.children} />
      })}>
      <DrawerNative.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          title: 'UnityTalk',
          drawerIcon: () => (
            <CustomIcon
              name="home"
              size={theme.FONTSIZE.size_20}
              color={theme.COLORS.primaryBlackHex}
            />
          ),
        }}
      />
      <DrawerNative.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: () => (
            <CustomIcon
              name="gear"
              size={theme.FONTSIZE.size_20}
              color={theme.COLORS.primaryBlackHex}
            />
          ),
        }}
      />
    </DrawerNative.Navigator>
  );
};

export default DrawerNavigator;
