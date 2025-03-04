import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import Routes from './src/navigation/Routes';
import { requestUserPermission } from './src/utils/utils';
import { ColorSchemeProvider } from './src/context/ColorSchemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
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


    if (await requestUserPermission()) {
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ColorSchemeProvider>
          <Routes />
        </ColorSchemeProvider>
      </GestureHandlerRootView>
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
