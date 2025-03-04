import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ColorSchemeContext';

type SectionHeaderProps = {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { theme } = useTheme();
  return (
    <Text style={{
      paddingHorizontal: theme.spacing.space16,
      fontSize: theme.fontSizes.size20,
      fontWeight: 'bold',
      color: theme.colors.accent,
      marginBottom: theme.spacing.space15,
      marginTop: theme.spacing.space36
    }}>
      {title}
    </Text>
  )
}

export default SectionHeader

const styles = StyleSheet.create({})