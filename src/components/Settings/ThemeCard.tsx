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
  const { theme, switchTheme } = useTheme();
  const systemColorScheme = Appearance.getColorScheme() || 'light';

  const handleThemeChange = () => {
    onSelect && onSelect(item.key);
    switchTheme(item.key);
  };

  return (
    <Pressable onPress={handleThemeChange}>
      <View
        style={[
          styles.themeBox,
          {
            backgroundColor: selectedTheme === item.key ? 'white' : 'transparent',
            borderWidth: selectedTheme === item.key ? 2 : 0,
            borderColor: themes[item.key][systemColorScheme].COLORS.accent,
          }
        ]}
      >
        <View style={[styles.innerBox, { backgroundColor: item.color }]}>
          <Text style={{ fontSize: theme.FONTSIZE.size_28 }}>{item.icon}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ThemeCard;

const styles = StyleSheet.create({
  themeBox: {
    width: 100,
    height: 130,
    borderRadius: 15,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBox: {
    width: 90,
    height: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});