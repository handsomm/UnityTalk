import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon';
import { useTypedNavigation } from '../utils/navigationUtils';
import { useTheme } from '../context/ColorSchemeContext';

type CustomHeaderProps = {
  title?: string;
  border?: boolean;
  heroText?: string;
  icon?: IconType;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, border, heroText, icon }) => {
  const { theme } = useTheme();

  const navigation = useTypedNavigation();

  return (
    <View style={{
      backgroundColor: theme.colors.statusbar,
      shadowColor: theme.colors.black,
      elevation: 10
    }}>
      <View style={[
        styles.container,
        (border || !heroText) && { borderBottomWidth: 1, borderBottomColor: theme.colors.gray200 },

      ]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1, gap: 10, flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name='cheveron-left' size={theme.fontSizes.size16} color={theme.colors.statusbarContent} />
          {!title && (
            <Text style={{
              fontFamily: theme.fontFamily.poppinsRegular, fontSize: theme.fontSizes.size16, color: theme.colors.statusbarContent, left: -5
            }}>
              Back
            </Text>
          )}
        </TouchableOpacity>
        <Text style={{
          fontSize: theme.fontSizes.size16,
          fontWeight: 'bold',
          color: theme.colors.statusbarContent,
          fontFamily: theme.fontFamily.poppinsSemibold,
          flex: 3,
          textAlign: "center",
        }}>
          {title}
        </Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {heroText && (
        <View style={{ paddingVertical: 5, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', borderBottomWidth: 1, borderBottomColor: theme.colors.gray200 }}>
          <Text style={{ fontSize: theme.fontSizes.size32, fontWeight: 'bold', color: theme.colors.statusbarContent }}>{heroText}</Text>
          <CustomIcon name={icon as string} size={30} color={theme.colors.statusbarContent} />
        </View>
      )}
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    height: 45 + 12 + StatusBar.currentHeight!,
    justifyContent: "space-between",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
  },
})