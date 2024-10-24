import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme } from '../context/ThemeContext';
import CustomIcon from './CustomIcon';
import { DrawerItems } from '../types';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const { theme } = useTheme();

  const DrawerItems: DrawerItems[] = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'Settings',
      icon: 'gear',
    },
    {
      name: 'Test',
      icon: 'spinner',
    }
  ]

  return (
    <DrawerContentScrollView>
      {/* <DrawerItemList {...props} /> */}
      {/* TODO: Needs to design the sidebar */}
      {DrawerItems.map(item => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
              if (item.name == "Home") return;
              navigation.navigate('StackScreens', { screen: item.name });
            }}
            key={item.name}
            style={{
              marginVertical: 10,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderRadius: theme.BORDERRADIUS.radius_8,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CustomIcon name={item.icon} size={theme.FONTSIZE.size_20} color={theme.COLORS.tint} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{
                  fontSize: theme.FONTSIZE.size_20,
                  fontWeight: 'bold',
                  color: theme.COLORS.tint,
                }}>
                  {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;