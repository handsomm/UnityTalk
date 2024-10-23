import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import { useTheme } from '../context/ThemeContext';
import CustomIcon from '../components/CustomIcon';
import { TouchableOpacity, View } from 'react-native';
import AnimatedHeader from '../components/AnimatedHeader';
import { RouteProp } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';

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
  const { theme } = useTheme();

  return (
    <DrawerNative.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}

      screenOptions={({ navigation, route }: DrawerNavProps) => ({
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
          const currentScreen = route.name;
          const shouldRenderHeaderLeft = currentScreen === 'Home';
          return shouldRenderHeaderLeft ? (
            <TouchableOpacity
              accessibilityLabel='Toggle navigation menu'
              style={{ width: 38, justifyContent: 'space-between', gap: 4, marginLeft: 12, padding: 5 }}
              onPress={navigation.toggleDrawer}>
              <View style={{ width: '100%', height: theme.SPACING.space_4, backgroundColor: theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4 }} />
              <View style={{ width: '70%', height: theme.SPACING.space_4, backgroundColor: theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4 }} />
              <View style={{ width: '85%', height: theme.SPACING.space_4, backgroundColor: theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4 }} />
            </TouchableOpacity>
          ) : null
        },
        headerTitle: (props) => <AnimatedHeader title={props.children} />,
        swipeEdgeWidth: 120
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
    </DrawerNative.Navigator>
  );
};

export default DrawerNavigator;
