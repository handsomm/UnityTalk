import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';
import CustomIcon from '../../components/CustomIcon';
import SectionHeader from '../../components/Settings/SectionHeader';

const SettingsScreen = () => {
  const { theme } = useTheme();
  type SettingItem = {
    title: string;
    subtitle: string;
    icon: string;
    iconBackgroundColor: string;
    border: boolean;
    onClick: () => void;
  };

  type SettingSection = {
    section: string;
    items: SettingItem[];
  };

  const SettingItems: SettingSection[] = [
    {
      section: "Appearance",
      items: [
        {
          title: "Theme Preferences",
          subtitle: "Theme and light/dark mode",
          icon: "dark",
          iconBackgroundColor: "#7F8CFF",
          border: true,
          onClick: () => {
            // TODO: Action to switch themes
          }
        }
      ]
    },
    {
      section: "Account settings",
      items: [
        {
          title: "Profile Information",
          subtitle: "Name, Email, Security",
          icon: "user",
          iconBackgroundColor: "#A6D6FF",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "Privacy",
          subtitle: "Control your privacy",
          icon: "shield",
          iconBackgroundColor: "#9BA6FA",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "Change Password",
          subtitle: "Change your current password",
          icon: "lock",
          iconBackgroundColor: "#00C48C",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
      ]
    },
    {
      section: "Notifications and Sounds",
      items: [
        {
          title: "Push Notifications",
          subtitle: "Notify me about updates and messages",
          icon: "bell-fill",
          iconBackgroundColor: "#FF98A8",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "Sound Preferences",
          subtitle: "Customize your notification sounds",
          icon: "volume-3",
          iconBackgroundColor: "#FFC764",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        }
      ]
    },
    {
      section: "General",
      items: [
        {
          title: "Language",
          subtitle: "Change app language",
          icon: "world",
          iconBackgroundColor: "#6FCF97",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "Terms & Conditions",
          subtitle: "Review our terms and conditions",
          icon: "file-text",
          iconBackgroundColor: "#B8B8FF",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "Privacy Policy",
          subtitle: "Learn about your data rights",
          icon: "shield",
          iconBackgroundColor: "#96FFE1",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "Rate our App",
          subtitle: "Rate & Review us",
          icon: "heart-fill",
          iconBackgroundColor: "#F6BB86",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
        {
          title: "About",
          subtitle: "App version, development team, and more",
          icon: "info-fill",
          iconBackgroundColor: "#FFD700",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
      ]
    },
  ];

  return (
    <MainContainer style={{ justifyContent: "center" }}>
      <CustomHeader heroText='Settings' icon='gear' />
      <View style={{ flex: 1 }}>
        {SettingItems.map(settingItem => {
          return (
            <React.Fragment key={settingItem.section}>
              <SectionHeader title={settingItem.section} key={settingItem.section} />
              {settingItem.items.map(item => {
                return (
                  <React.Fragment key={item.title}>
                    <View style={[
                      { paddingHorizontal: theme.SPACING.space_16, flexDirection: 'row', gap: theme.SPACING.space_15, paddingVertical: 12 },
                      item.border && { borderBottomWidth: 1, borderBottomColor: theme.COLORS.secondaryLightGreyHex }
                    ]}>
                      <View style={{ backgroundColor: item.iconBackgroundColor, borderRadius: theme.BORDERRADIUS.radius_25, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                        <CustomIcon name={item.icon} size={theme.FONTSIZE.size_28} color={theme.COLORS.primaryWhiteHex} />
                      </View>
                      <View style={{ flex: 6, justifyContent: "center" }}>
                        <Text style={{ fontSize: theme.FONTSIZE.size_16, fontWeight: "bold", color: theme.COLORS.tint }}>{item.title}</Text>
                        <Text style={{ fontSize: theme.FONTSIZE.size_14, fontFamily: theme.FONTFAMILY.poppins_light, fontStyle: "italic", color: theme.COLORS.primaryLightGreyHex }}>{item.subtitle}</Text>
                      </View>
                    </View>
                  </React.Fragment>
                )
              })}
            </React.Fragment>
          )
        })}
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