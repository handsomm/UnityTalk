import { StyleSheet, Text, View, Animated, ScrollView, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import ThemeCard from '../../../components/Settings/ThemeCard';
import { themes } from '../../../themes';
import SectionContainer from '../../../components/Settings/SectionContainer';
import CustomIcon from '../../../components/CustomIcon';

const themesss = [
  { id: '1', color: '#F3F4F6', icon: '🏠' }, // Light
  { id: '2', color: '#C5E1A5', icon: '🐥' }, // Green
  { id: '3', color: '#90CAF9', icon: '⛄' }, // Blue
  { id: '4', color: '#CE93D8', icon: '💎' }, // Purple
  { id: '5', color: '#FFCC80', icon: '👩‍🏫' }, // Orange
  { id: '6', color: '#FFAB91', icon: '🌺' }, // Pink
];

const themesData: { key: keyof typeof themes; color: string; icon: string }[] = [
  { key: 'basic', color: '#F3F4F6', icon: '🏠' },
  { key: 'elegant', color: '#C5E1A5', icon: '🐥' }
];

const ThemePreference = () => {
  const { mode, theme, storedTheme, toggleMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<Themes>(storedTheme || 'basic');

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.96,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.7,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView>
      <SectionContainer>
        <Text style={[styles.title, { color: theme.COLORS.accent, paddingHorizontal: theme.SPACING.space_16 }]}>Color Theme</Text>
        <Animated.FlatList
          data={themesData}
          horizontal
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <ThemeCard item={item} selectedTheme={selectedTheme} onSelect={(key: string) => setSelectedTheme(key as Themes)} />
          )}
          style={{ paddingBottom: 12 }}
        />
        <View>
          <Pressable
            onPress={toggleMode}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Animated.View
              style={{
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                paddingHorizontal: 16,
                paddingVertical: theme.SPACING.space_10,
              }}
            >
              <CustomIcon name={mode === 'dark' ? 'light' : 'dark'} size={20} color={theme.COLORS.accent} />
              <Text style={{ fontSize: theme.FONTSIZE.size_16, color: theme.COLORS.accent }}>Switch to Night Mode</Text>
            </Animated.View>
          </Pressable>
        </View>
      </SectionContainer>
      <SectionContainer>

      </SectionContainer>
    </ScrollView>
  );
};

export default ThemePreference;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
