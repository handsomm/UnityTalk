import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useTheme} from '../context/ThemeContext';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader = ({title}: CustomHeaderProps) => {
  const {theme} = useTheme();
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const [statusMessage, setStatusMessage] = useState('Connecting...');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isConnected) {
      intervalId = setInterval(() => {
        setStatusMessage(prevMessage =>
          prevMessage === 'Connecting...'
            ? 'Waiting for network...'
            : 'Connecting...',
        );
      }, 2000);
    } else {
      setStatusMessage(title);
    }

    return () => clearInterval(intervalId);
  }, [isConnected, title]);

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText, {color: theme.COLORS.tint}]}>
        {statusMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
