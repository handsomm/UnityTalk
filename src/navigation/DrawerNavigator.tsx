import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import CustomIcon from '../components/CustomIcon';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import AnimatedHeader from '../components/AnimatedHeader';
import { RouteProp } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { useTheme } from '../context/ColorSchemeContext';

export type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

export type DrawerNavProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
  route: RouteProp<DrawerParamList, keyof DrawerParamList>;
};

const DrawerNavigator = () => {
  const DrawerNative = createDrawerNavigator<DrawerParamList>();
  const { theme, mode } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={"transparent"} translucent barStyle={mode === 'dark' ? "light-content" : 'light-content'} />
      <DrawerNative.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}

        screenOptions={({ navigation, route }: DrawerNavProps) => ({
          drawerStyle: {
            backgroundColor: theme.colors.primary,
            width: 250,
          },
          headerStyle: {
            backgroundColor: theme.colors.statusbar,
            shadowColor: theme.colors.black,
            elevation: 10,
          },
          headerTintColor: theme.colors.tint,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: theme.colors.accent,
          drawerLabelStyle: {
            color: theme.colors.black,
          },
          headerLeft: (props) => {
            const currentScreen = route.name;
            const shouldRenderHeaderLeft = currentScreen === 'Home';
            return shouldRenderHeaderLeft ? (
              <TouchableOpacity
                accessibilityLabel='Toggle navigation menu'
                style={{ width: 38, justifyContent: 'space-between', gap: 4, marginLeft: 12, padding: 5 }}
                onPress={navigation.toggleDrawer}>
                <View style={{ width: '100%', height: theme.spacing.space4, backgroundColor: theme.colors.statusbarContent, borderRadius: theme.borderRadii.radius4 }} />
                <View style={{ width: '70%', height: theme.spacing.space4, backgroundColor: theme.colors.statusbarContent, borderRadius: theme.borderRadii.radius4 }} />
                <View style={{ width: '85%', height: theme.spacing.space4, backgroundColor: theme.colors.statusbarContent, borderRadius: theme.borderRadii.radius4 }} />
              </TouchableOpacity>
            ) : null
          },
          headerTitle: (props) => <AnimatedHeader title={props.children} />,
          swipeEdgeWidth: 120,
          // drawerType: 'permanent'
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
                size={theme.fontSizes.size20}
                color={theme.colors.black}
              />
            ),
          }}
        />
      </DrawerNative.Navigator>
    </>
  );
};

export default DrawerNavigator;
