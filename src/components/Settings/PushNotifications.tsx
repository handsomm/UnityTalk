import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const PushNotifications = () => {
  const { theme } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: theme.SPACING.space_16 }}>
      <Text style={{ fontSize: 32, color: theme.COLORS.tint, lineHeight: 54 }}>Notification</Text>
      <Switch
        trackColor={{ false: theme.COLORS.greyHex, true: theme.COLORS.lightAccent }}
        thumbColor={isEnabled ? theme.COLORS.accent : theme.COLORS.secondary}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default PushNotifications