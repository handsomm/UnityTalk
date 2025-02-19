import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '../../context/ThemeContext';

interface SectionContainerProps {
  children?: ReactNode;
  style?: ViewStyle;
  // header?: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({children, style}) => {
  const { theme } = useTheme();

  return (
    <View style={{ ...style, backgroundColor: theme.COLORS.white, paddingVertical: theme.SPACING.space_16, marginBottom: theme.SPACING.space_20 }}>
      {children}
    </View>
  )
}

export default SectionContainer

const styles = StyleSheet.create({})