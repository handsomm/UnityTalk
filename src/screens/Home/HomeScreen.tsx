import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../../components/CustomIcon'
import { useTheme } from '../../context/ThemeContext';

const HomeScreen = () => {
  const {theme} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor:theme.COLORS.primaryWhiteHex}}>
      <Text style={{color: theme.COLORS.primaryBlackHex}}>HomeScreen</Text>
      <CustomIcon name='spinner' size={25}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})