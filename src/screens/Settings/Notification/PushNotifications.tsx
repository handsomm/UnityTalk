import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { checkNotifications } from 'react-native-permissions';
import { requestUserPermission } from '../../../utils/utils';
import { useTheme } from '../../../context/ThemeContext';

const PushNotifications = () => {
  const { theme } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    (async () => {
      const { status } = await checkNotifications();
      const notificationEnabled = status === 'granted';
      setIsEnabled(notificationEnabled);
      setIsInitialized(true);
      console.log('Notification Status:', status);
    })();
  }, []);

  if (!isInitialized) return null;

  const handleTestSend = async () => {
    setIsLoading(true);
    if (await requestUserPermission()) {
      messaging()
        .getToken()
        .then(async fcmToken => {
          console.log('FCM Token: ', fcmToken);
          try {
            const response = await axios.post('https://api.soumya.site/notifications/send-notification/', {
              registration_id: fcmToken,
              message_title: "Test",
              message_body: "Test message."
            });
            setIsLoading(false);
            console.log('Response:', response.data);
          } catch (error) {
            setIsLoading(false);
            console.error('Error sending notification:', error);
          }
        })
    } else {
      setIsLoading(false);
      console.log('Not Authorized: ')
    }
  };

  return (
    <View style={{ paddingHorizontal: theme.SPACING.space_16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 32, color: theme.COLORS.tint, lineHeight: 54 }}>Notification</Text>
        <Switch
          trackColor={{ false: theme.COLORS.gray, true: theme.COLORS.lightAccent }}
          thumbColor={isEnabled ? theme.COLORS.accent : theme.COLORS.secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <TouchableOpacity
        style={[styles.customButton, isLoading && styles.disabledButton]}
        onPress={handleTestSend}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Test Notification</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PushNotifications;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  customButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: '#5a9fd3',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});