import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import CustomIcon from './CustomIcon';
import { useNavigation } from '@react-navigation/native';

type CustomHeaderProps = {
  title?: string;
  border?: boolean;
  heroText?: string;
  icon?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, border, heroText, icon }) => {
  const { theme } = useTheme();

  const navigation = useNavigation();


  return (
    <View>
      <View style={[
        styles.container,
        (border || !heroText) && { borderBottomWidth: 1, borderBottomColor: theme.COLORS.tint },

      ]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1, gap: 10, flexDirection: 'row', alignItems: 'center' }}>
          <CustomIcon name='cheveron-left' size={theme.FONTSIZE.size_16} color={theme.COLORS.accent} />
          {!title && (
            <Text style={{
              fontFamily: theme.FONTFAMILY.poppins_regular, fontSize: theme.FONTSIZE.size_16, color: theme.COLORS.accent, left: -5
            }}>
              Back
            </Text>
          )}
        </TouchableOpacity>
        <Text style={{
          fontSize: theme.FONTSIZE.size_16,
          fontWeight: 'bold',
          color: theme.COLORS.tint,
          fontFamily: theme.FONTFAMILY.poppins_semibold,
          flex: 1,
          textAlign: "center",
        }}>
          {title}
        </Text>
        <View style={{ flex: 1 }}></View>
      </View>
      {heroText && (
        <View style={{ paddingVertical: 5, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between", alignItems: 'center', borderBottomWidth: 1, borderBottomColor: theme.COLORS.secondaryLightGreyHex }}>
          <Text style={{ fontSize: theme.FONTSIZE.size_32, fontWeight: 'bold', color: theme.COLORS.tint }}>{heroText}</Text>
          <CustomIcon name={icon as string} size={30} color={theme.COLORS.tint} />
        </View>
      )}
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: 45,
    justifyContent: "space-between",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
})