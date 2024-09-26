import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useTheme} from '../context/ThemeContext';
// import BouncingDots from './Animations/BouncingDots';
// import FadingDots from './Animations/FadingDots';

const AnimatedHeader = ({title}: {title: string}) => {
  const {theme} = useTheme();
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [currentText, setCurrentText] = useState('Connecting...');
  const [showConnecting, setShowConnecting] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isConnected) {
      setCurrentText('Connecting...');
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowConnecting(false);
        setCurrentText('Waiting for network...');
        slideAnim.setValue(-15);
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,                                                                                          
        }).start();
      });
    } else {
      setCurrentText(title);
      setShowConnecting(true);
    }
  }, [isConnected, slideAnim]);

  return (
    <View style={styles.headerContainer}>
      {showConnecting ? (
        <Animated.Text
          style={{
            fontSize: theme.FONTSIZE.size_20,
            fontWeight: 'bold',
            color: theme.COLORS.tint,
            transform: [{translateY: slideAnim}],
          }}>
          {currentText}
        </Animated.Text>
      ) : (
        <View style={styles.bounceContainer}>
          <Text
            style={{
              fontSize: theme.FONTSIZE.size_20,
              fontWeight: 'bold',
              color: theme.COLORS.tint,
            }}>
            {currentText}
          </Text>
          {/* <BouncingDots color={theme.COLORS.tint} /> */}
          {/* <FadingDots color={theme.COLORS.tint} /> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bounceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AnimatedHeader;
