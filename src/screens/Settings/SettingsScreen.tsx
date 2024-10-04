import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';

const SettingsScreen = () => {
  const {theme, mode, toggleMode, switchTheme, setThemeMode} = useTheme();

  return (
    <MainContainer style={{justifyContent: "center"}}>
      <CustomHeader heroText='Settings' title='khv' />
    </MainContainer>
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