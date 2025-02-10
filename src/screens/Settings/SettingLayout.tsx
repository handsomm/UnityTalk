import React from 'react'
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';
import { useTypedRoute } from '../../utils/routeUtils';
import { useTheme } from '../../context/ThemeContext';
import PushNotifications from './Notification/PushNotifications';
import { Text, View } from 'react-native';
import { FULL_SCREEN_HEIGHT_WITH_SMALL_HEADER } from '../../utils/constands';
import ThemePreferences from './Theme/ThemePreferences';



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
            <Text style={{ color: theme.COLORS.gray400, fontSize: theme.FONTSIZE.size_30, fontFamily: theme.FONTFAMILY.poppins_extralight }}>Under development.</Text>
            <Text style={{ color: theme.COLORS.gray400, fontFamily: theme.FONTFAMILY.poppins_semibold, fontSize: theme.FONTSIZE.size_20 }}>Coming soon!!!!</Text>
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