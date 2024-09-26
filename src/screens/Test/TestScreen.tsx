import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';

const TestScreen = () => {
  const {theme, mode, toggleMode, switchTheme, setThemeMode} = useTheme();


  return (
    <MainContainer style={{justifyContent: "center"}}>
      <Text style={{ color: theme.COLORS.primary }}>primary</Text>
      <Text style={{ color: theme.COLORS.secondary }}>secondary</Text>
      <Text style={{ color: theme.COLORS.tertiary }}>tertiary</Text>
      <Text style={{ color: theme.COLORS.accent }}>accent</Text>
      <Text style={{ color: theme.COLORS.tint }}>tint</Text>
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
      <Button title="Light Mode" onPress={() =>setThemeMode('light')} />
      <Button title="Dark Mode" onPress={() =>setThemeMode('dark')} />
      <Button title="System Mode" onPress={() =>setThemeMode('light', 'system')} />
    </MainContainer>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});