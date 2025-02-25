import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  ViewStyle,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface MainContainerProps {
  children?: ReactNode;
  style?: ViewStyle;
  header?: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  style,
  header,
  ...props
}) => {
  const { theme, mode } = useTheme();
  return (
    <View
      style={[{ backgroundColor: theme.colors.primary, flex: 1 }, style]}
      {...props}>
      {/* <StatusBar backgroundColor={theme.colors.statusbar} barStyle={mode === 'dark' ? "light-content" : 'light-content'} /> */}
      {header && <View>{header}</View>}
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  );
};

export default MainContainer;