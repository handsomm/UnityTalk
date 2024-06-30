import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '../../themes/useTheme';

const SettingsScreen = () => {
  const [theme, toggleMode, switchTheme] = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.COLORS.primaryWhiteHex }]}>
      <Text style={{ color: theme.COLORS.dangerHex }}>dangerHex</Text>
      <Text style={{ color: theme.COLORS.infoHex }}>HeinfoHexllo</Text>
      <Text style={{ color: theme.COLORS.successHex }}>successHex</Text>
      <Text style={{ color: theme.COLORS.warningHex }}>warningHex</Text>

      <Text style={{ color: theme.COLORS.primaryRedHex }}>primaryRedHex</Text>
      <Text style={{ color: theme.COLORS.primaryOrangeHex }}>primaryOrangeHex</Text>

      <Text style={{ color: theme.COLORS.primaryBlackHex }}>primaryBlackHex</Text>
      <Text style={{ color: theme.COLORS.primaryWhiteHex }}>primaryWhiteHex</Text>

      
      <Text style={{ color: theme.COLORS.primaryDarkGreyHex }}>primaryDarkGreyHex</Text>
      <Text style={{ color: theme.COLORS.primaryLightGreyHex }}>primaryLightGreyHex</Text>
      <Text style={{ color: theme.COLORS.primaryBlackRGBA }}>primaryBlackRGBA</Text>
      <Text style={{ color: theme.COLORS.secondaryBlackRGBA }}>secondaryBlackRGBA</Text>
      

      <Text style={{ color: theme.COLORS.primaryGreyHex }}>primaryGreyHex</Text>
      <Text style={{ color: theme.COLORS.secondaryGreyHex }}>secondaryGreyHex</Text>
      <Text style={{ color: theme.COLORS.secondaryDarkGreyHex }}>secondaryDarkGreyHex</Text>
      <Text style={{ color: theme.COLORS.secondaryLightGreyHex }}>secondaryLightGreyHex</Text>
      <Button title="Switch to Basic" onPress={() => switchTheme('basic')} />
      <Button title="Toggle Mode" onPress={toggleMode} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});