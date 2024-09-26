import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { useTheme } from '../context/ThemeContext';
import CustomIcon from '../components/CustomIcon';
import { TouchableOpacity, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { RouteProp } from '@react-navigation/native';

export type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

export type DrawerNavProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
  route: RouteProp<DrawerParamList, keyof DrawerParamList>;
};


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const { theme } = useTheme();
  return (
    <DrawerContentScrollView>
      {/* <DrawerItemList {...props} /> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          marginVertical: 10,
          padding: 10,
          backgroundColor: theme.COLORS.primary,
          borderRadius: theme.BORDERRADIUS.radius_8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name="home" size={theme.FONTSIZE.size_20} color={theme.COLORS.tint} />
          <View style={{ marginLeft: 10 }}>
            <CustomHeader title="Home" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('StackScreens', { screen: 'Settings' })
        }}
        // onPress={() => navigation.navigate('Settings')}
        style={{
          marginVertical: 10,
          padding: 10,
          backgroundColor: theme.COLORS.primary,
          borderRadius: theme.BORDERRADIUS.radius_8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name="gear" size={theme.FONTSIZE.size_20} color={theme.COLORS.tint} />
          <View style={{ marginLeft: 10 }}>
            <CustomHeader title="Settings" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('StackScreens', { screen: 'Test' })
        }}
        style={{
          marginVertical: 10,
          padding: 10,
          backgroundColor: theme.COLORS.primary,
          borderRadius: theme.BORDERRADIUS.radius_8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name="spinner" size={theme.FONTSIZE.size_20} color={theme.COLORS.tint} />
          <View style={{ marginLeft: 10 }}>
            <CustomHeader title="Test" />
          </View>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
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
              style={{ width: 38, justifyContent: 'space-between', gap: 4, marginLeft: 12, padding: 5 }}
              onPress={navigation.toggleDrawer}>
              <View style={{ width: '100%', height: theme.SPACING.space_4, backgroundColor: theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4 }} />
              <View style={{ width: '70%', height: theme.SPACING.space_4, backgroundColor: theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4 }} />
              <View style={{ width: '85%', height: theme.SPACING.space_4, backgroundColor: theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4 }} />
            </TouchableOpacity>
          ) : null
          // return (
          //   <TouchableOpacity
          //     style={{width: 38, justifyContent:'space-between', gap: 4, marginLeft: 12, padding: 5}}
          //     onPress={navigation.toggleDrawer}>
          //       <View style={{width: '100%', height: theme.SPACING.space_4, backgroundColor:theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4}} />
          //       <View style={{width: '70%', height: theme.SPACING.space_4, backgroundColor:theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4}} />
          //       <View style={{width: '85%', height:theme.SPACING.space_4, backgroundColor:theme.COLORS.tint, borderRadius: theme.BORDERRADIUS.radius_4}} />
          //   </TouchableOpacity>
          // );
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
      {/* <DrawerNative.Screen
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
      /> */}
    </DrawerNative.Navigator>
  );
};

export default DrawerNavigator;
