import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../../components/CustomIcon'
import useTheme from '../../themes/useTheme';

const HomeScreen = () => {
  const [theme, toggleMode, switchTheme, mode] = useTheme();

  return (
    <View style={{backgroundColor:theme.COLORS.primaryWhiteHex}}>
      <Text>HomeScreen</Text>
      <CustomIcon name='spinner' size={25}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})