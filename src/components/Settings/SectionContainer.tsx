import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '../../context/ColorSchemeContext';

interface SectionContainerProps {
  children?: ReactNode;
  style?: ViewStyle;
  // header?: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, style }) => {
  const { theme } = useTheme();

  return (
    <View style={{ ...style, backgroundColor: theme.colors.white, paddingVertical: theme.spacing.space16, marginBottom: theme.spacing.space20 }}>
      {children}
    </View>
  )
}

export default SectionContainer

const styles = StyleSheet.create({})