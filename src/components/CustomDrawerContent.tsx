import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import CustomIcon from './CustomIcon';
import { useTheme } from '../context/ColorSchemeContext';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const { theme, toggle, mode } = useTheme();

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
  ];
  // Shared value for rotation
  const rotation = useSharedValue(0);

  // Animate rotation when mode changes
  useEffect(() => {
    rotation.value = withTiming(mode === 'dark' ? 180 : 0, { duration: 300 });
  }, [mode]);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }}>
      <LinearGradient colors={[theme.colors.lightAccent, theme.colors.statusbar]} useAngle={true} angle={90} angleCenter={{ x: 0.5, y: 0.5 }} style={{ flex: 1, backgroundColor: 'rgba(0, 136, 255, 0.1)', paddingTop: 44, height: 180, paddingHorizontal: theme.spacing.space16, borderBottomRightRadius: theme.borderRadii.radius25 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: theme.spacing.space10 }}>
          <View>
            <Image source={{ uri: 'https://avatar.iran.liara.run/public/1' }} style={[styles.avatar, { borderRadius: theme.borderRadii.radius30 }]} />
          </View>
          <View>
            <Pressable onPress={toggle} style={{ padding: 10 }}>
              <Animated.View style={animatedStyle}>
                <CustomIcon name={mode === 'dark' ? 'light' : 'dark'} size={22} color={theme.colors.tint} />
              </Animated.View>
            </Pressable>
          </View>
        </View>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
          color: theme.colors.tint,
          // paddingHorizontal: theme.spacing.space4
        }}>Soumya Ranjan 🥰</Text>
      </LinearGradient>
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
              marginVertical: theme.spacing.space10,
              paddingVertical: theme.spacing.space12,
              paddingHorizontal: theme.spacing.space16,
              borderRadius: theme.borderRadii.radius8,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.space20 }}>
              <CustomIcon name={item.icon} size={theme.fontSizes.size24} color={theme.colors.tint} />
              <View style={{}}>
                <Text style={{
                  fontSize: theme.fontSizes.size16,
                  fontWeight: 'bold',
                  color: theme.colors.tint,
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

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
  },
});