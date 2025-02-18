import { StyleSheet, Text, View, Pressable, Appearance } from 'react-native';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

type ThemeCardProps = {
  item: { key: keyof typeof themes; color: string; icon: string };
  selectedTheme?: Themes;
  onSelect?: (key: string) => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ item, selectedTheme, onSelect }) => {
  const { switchTheme } = useTheme();
  const systemColorScheme = Appearance.getColorScheme() || 'light';

  const handleThemeChange = () => {
    onSelect && onSelect(item.key);
    switchTheme(item.key);
  };

  return (
    <Pressable onPress={handleThemeChange}>
      <View style={[styles.themeBox, { backgroundColor: item.color, borderWidth: selectedTheme === item.key ? 2 : 0, borderColor: themes[item.key][systemColorScheme].COLORS.statusbar }]}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
    </Pressable>
  );
};

export default ThemeCard;

const styles = StyleSheet.create({
  themeBox: {
    width: 60,
    height: 80,
    borderRadius: 10,
    marginHorizontal: 8,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
});