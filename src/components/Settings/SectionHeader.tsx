import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';

type SectionHeaderProps = {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { theme } = useTheme();
  return (
    <Text style={{
      paddingHorizontal: theme.SPACING.space_16,
      fontSize: theme.FONTSIZE.size_20,
      fontWeight: 'bold',
      color: theme.COLORS.accent,
      marginBottom: theme.SPACING.space_15,
      marginTop: theme.SPACING.space_36
    }}>
      {title}
    </Text>
  )
}

export default SectionHeader

const styles = StyleSheet.create({})