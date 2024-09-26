import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';

const SettingsScreen = () => {
  const {theme, mode, toggleMode, switchTheme, setThemeMode} = useTheme();

  return (
    <MainContainer style={{justifyContent: "center"}}>

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