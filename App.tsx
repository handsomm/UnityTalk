import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import {
  ThemeProvider,
  useTheme,
} from './src/context/ThemeContext';

const App = () => {
  const {theme, mode} = useTheme();

  if (!theme) {
    return <ActivityIndicator />;
  }

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    console.log('Authorization status(authStatus): ', authStatus);
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  }

  async function onMessageReceived(message: any) {
    console.log(message, "message")
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    notifee.displayNotification({
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  const getDeviceToken = async () => {
    // TODO: Need more work
    notifee.requestPermission()

    
    if(await requestUserPermission()) {
      messaging()
      .getToken()
      .then(fcmToken => {
        console.log('FCM Token: ', fcmToken);
      })
    } else {
      console.log('Not Authorized: ')
    }
    messaging().onMessage(onMessageReceived);
    messaging().setBackgroundMessageHandler(onMessageReceived);

    // messaging()
    //   .getInitialNotification()
    //   .then(async remoteMessage => {
    //     if(remoteMessage) {
    //       console.log('getInitialNotification: ' + 'Notification caused app to open from quit state')
    //       console.log(remoteMessage, "remoteMessage")
    //       Alert.alert('getInitialNotification: ' + 'Notification caused app to open from quit state');
    //     }
    //   });
    
    // messaging()
    //   .onNotificationOpenedApp(async remoteMessage => {
    //     if(remoteMessage) {
    //       console.log('getInitialNotification: ' + 'Notification caused app to open from background state')
    //       console.log(remoteMessage, "remoteMessage")
    //       Alert.alert('getInitialNotification: ' + 'Notification caused app to open from background state');
    //     }
    //   })

    // messaging()
    //   .setBackgroundMessageHandler(async remoteMessage => {
    //     console.log(remoteMessage, "remoteMessage in handled background.")
    //   })
  }

  // const unsubscribe = messaging().onMessage(async remoteMessage=> {
  //   Alert.alert('A new FCM message arived.')
  //   console.log('A new FCM message arived: ', JSON.stringify(remoteMessage));
  // })

  useEffect(() => {
    getDeviceToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <NavigationContainer
          theme={{
            dark: mode === 'dark',
            colors: {
              primary: theme.COLORS.primaryDarkGreyHex,
              background: theme.COLORS.primaryWhiteHex,
              card: theme.COLORS.primaryDarkGreyHex,
              text: theme.COLORS.primaryBlackHex,
              border: theme.COLORS.primaryBlackRGBA,
              notification: theme.COLORS.primaryRedHex,
            },
          }}>
          <DrawerNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
