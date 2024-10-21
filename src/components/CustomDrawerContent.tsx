import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme } from '../context/ThemeContext';
import CustomIcon from './CustomIcon';

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
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: theme.BORDERRADIUS.radius_8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name="home" size={theme.FONTSIZE.size_20} color={theme.COLORS.tint} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{
              fontSize: theme.FONTSIZE.size_20,
              fontWeight: 'bold',
              color: theme.COLORS.tint,
            }}>
              Home
            </Text>
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
          borderRadius: theme.BORDERRADIUS.radius_8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name="gear" size={theme.FONTSIZE.size_20} color={theme.COLORS.tint} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{
              fontSize: theme.FONTSIZE.size_20,
              fontWeight: 'bold',
              color: theme.COLORS.tint,
            }}>
              Settings
            </Text>
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
            <Text style={{
              fontSize: theme.FONTSIZE.size_20,
              fontWeight: 'bold',
              color: theme.COLORS.tint,
            }}>
              Test
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;