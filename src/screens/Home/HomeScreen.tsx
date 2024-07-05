import { StyleSheet, Text } from 'react-native'
import React from 'react'
import CustomIcon from '../../components/CustomIcon'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';

const HomeScreen = () => {
  const {theme} = useTheme();

  return (
    <MainContainer>
      <Text style={{color: theme.COLORS.primaryBlackHex}}>HomeScreen</Text>
      <CustomIcon name='spinner' size={25} color={theme.COLORS.primaryBlackHex}/>
    </MainContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})