import { SectionList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';
import CustomIcon from '../../components/CustomIcon';
import SectionHeader from '../../components/Settings/SectionHeader';
import { useTypedNavigation } from '../../utils/navigationUtils';

const SettingsScreen = () => {
  const { theme } = useTheme();
  const navigation = useTypedNavigation<'Settings'>();
  type SettingItem = {
    key: string;
    title: string;
    subtitle: string;
    icon: IconType;
    iconBackgroundColor: string;
    border: boolean;
    onClick: () => void;
  };

  type SettingSection = {
    key: string;
    section: string;
    data: SettingItem[];
  };

  const SettingItems: SettingSection[] = [
    {
      key: "Appearance",
      section: "Appearance",
      data: [
        {
          key: "ThemePreferences",
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
      key: "Account settings",
      section: "Account settings",
      data: [
        {
          key: "ProfileInformation",
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
          key: "Privacy",
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
          key: "ChangePassword",
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
      key: "Notifications and Sounds",
      section: "Notifications and Sounds",
      data: [
        {
          key: "PushNotifications",
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
          key: "SoundPreferences",
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
      key: "General",
      section: "General",
      data: [
        {
          key: "Language",
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
          key: "TermsConditions",
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
          key: "PrivacyPolicy",
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
          key: "RateApp",
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
          key: "About",
          title: "About",
          subtitle: "App version, development team, and more",
          icon: 'info-fill',
          iconBackgroundColor: "#FFD700",
          border: true,
          onClick: () => {
            // TODO: Action for onClick
          }
        },
      ]
    },
  ];

  const renderSectionHeader = ({ section }: { section: any }) => (
    <SectionHeader title={section.section} />
  );

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      key={item.key}
      onPress={() => {
        navigation.navigate('SettingLayout', { title: item.title, childComponent: item.key })
      }}
    >
      <View style={[
        { paddingHorizontal: theme.SPACING.space_16, flexDirection: 'row', gap: theme.SPACING.space_15, paddingVertical: 12 },
        item.border && { borderBottomWidth: 1, borderBottomColor: theme.COLORS.lightGreyHex }
      ]}>
        <View style={{ backgroundColor: item.iconBackgroundColor, borderRadius: theme.BORDERRADIUS.radius_25, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
          <CustomIcon name={item.icon} size={theme.FONTSIZE.size_28} color={theme.COLORS.primaryWhiteHex} />
        </View>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <Text style={{ fontSize: theme.FONTSIZE.size_16, fontWeight: "bold", color: theme.COLORS.tint }}>{item.title}</Text>
          <Text style={{ fontSize: theme.FONTSIZE.size_14, fontFamily: theme.FONTFAMILY.poppins_light, fontStyle: "italic", color: theme.COLORS.greyHex }}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <MainContainer
      header={<CustomHeader heroText='Settings' icon='gear' />}
    >
      <SectionList
        sections={SettingItems}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  )
}

export default SettingsScreen