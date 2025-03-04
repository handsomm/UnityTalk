import React from 'react'
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';
import { useTypedRoute } from '../../utils/routeUtils';
import PushNotifications from './Notification/PushNotifications';
import { Text, View } from 'react-native';
import { FULL_SCREEN_HEIGHT_WITH_SMALL_HEADER } from '../../utils/constands';
import ThemePreferences from './Theme/ThemePreferences';
import { useTheme } from '../../context/ColorSchemeContext';



const SettingLayout = () => {
  const { params } = useTypedRoute<'SettingLayout'>();
  const { theme } = useTheme();
  console.log(params)

  const renderChildComponent = () => {
    switch (params.childComponent) {
      case 'PushNotifications':
        return <PushNotifications />;
      case 'ThemePreferences':
        return <ThemePreferences />;
      default:
        return (
          <View style={{ justifyContent: "center", alignItems: "center", height: FULL_SCREEN_HEIGHT_WITH_SMALL_HEADER }}>
            <Text style={{ color: theme.colors.gray400, fontSize: theme.fontSizes.size30, fontFamily: theme.fontFamily.poppinsExtralight }}>Under development.</Text>
            <Text style={{ color: theme.colors.gray400, fontFamily: theme.fontFamily.poppinsSemibold, fontSize: theme.fontSizes.size20 }}>Coming soon!!!!</Text>
          </View>
        );
    }
  };

  return (
    <MainContainer
      header={<CustomHeader title={params?.title} />}
    >
      {renderChildComponent()}
    </MainContainer>
  )
}

export default SettingLayout