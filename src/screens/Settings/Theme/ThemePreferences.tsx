import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import ThemeCard from '../../../components/Settings/ThemeCard';
import { themes } from '../../../themes';

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
  const { theme, storedTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<Themes>(storedTheme || 'basic');

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.COLORS.statusbar, paddingHorizontal: theme.SPACING.space_16 }]}>Color Theme</Text>
      <Animated.FlatList
        data={themesData}
        horizontal
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <ThemeCard item={item} selectedTheme={selectedTheme} onSelect={(key: string) => setSelectedTheme(key as Themes)} />
        )}
      />
    </View>
  );
};

export default ThemePreference;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    // alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
