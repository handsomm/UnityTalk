import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';
import CustomIcon from '../../components/CustomIcon';

const SettingsScreen = () => {
  const { theme } = useTheme();

  return (
    <MainContainer style={{ justifyContent: "center" }}>
      <CustomHeader heroText='Settings' icon='gear' />
      <View style={{ flex: 1 }}>
        <Text style={{ paddingHorizontal: theme.SPACING.space_16, fontSize: theme.FONTSIZE.size_20, fontWeight: 'bold', color: theme.COLORS.accent, marginBottom: theme.SPACING.space_15 }}>
          Account settings
        </Text>
        <View style={{ paddingHorizontal: theme.SPACING.space_16, flexDirection: 'row', gap: theme.SPACING.space_15, borderBottomWidth: 1, paddingVertical: 12, borderBottomColor: theme.COLORS.secondaryLightGreyHex }}>
          <View style={{ backgroundColor: "#A6D6FF", borderRadius: theme.BORDERRADIUS.radius_25, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
            <CustomIcon name='user' size={theme.FONTSIZE.size_28} color={theme.COLORS.primaryWhiteHex} />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <Text style={{ fontSize: theme.FONTSIZE.size_16, fontWeight: "bold", color: theme.COLORS.tint }}>Profile Information</Text>
            <Text style={{ fontSize: theme.FONTSIZE.size_14, fontFamily: theme.FONTFAMILY.poppins_light, fontStyle: "italic", color: theme.COLORS.primaryLightGreyHex }}>Name, Email, Security</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: theme.SPACING.space_16, flexDirection: 'row', gap: theme.SPACING.space_15, borderBottomWidth: 1, paddingVertical: 12, borderBottomColor: theme.COLORS.secondaryLightGreyHex }}>
          <View style={{ backgroundColor: "#9BA6FA", borderRadius: theme.BORDERRADIUS.radius_25, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
            <CustomIcon name='shield' size={theme.FONTSIZE.size_28} color={theme.COLORS.primaryWhiteHex} />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <Text style={{ fontSize: theme.FONTSIZE.size_16, fontWeight: "bold", color: theme.COLORS.tint }}>Privacy</Text>
            <Text style={{ fontSize: theme.FONTSIZE.size_14, fontFamily: theme.FONTFAMILY.poppins_light, fontStyle: "italic", color: theme.COLORS.primaryLightGreyHex }}>Control your privacy</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: theme.SPACING.space_16, flexDirection: 'row', gap: theme.SPACING.space_15, borderBottomWidth: 1, paddingVertical: 12, borderBottomColor: theme.COLORS.secondaryLightGreyHex }}>
          <View style={{ backgroundColor: "#00C48C", borderRadius: theme.BORDERRADIUS.radius_25, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
            <CustomIcon name='lock' size={theme.FONTSIZE.size_28} color={theme.COLORS.primaryWhiteHex} />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <Text style={{ fontSize: theme.FONTSIZE.size_16, fontWeight: "bold", color: theme.COLORS.tint }}>Change Password</Text>
            <Text style={{ fontSize: theme.FONTSIZE.size_14, fontFamily: theme.FONTFAMILY.poppins_light, fontStyle: "italic", color: theme.COLORS.primaryLightGreyHex }}>Change your current password</Text>
          </View>
        </View>
      </View>
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