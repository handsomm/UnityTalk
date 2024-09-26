import {
  ScrollView,
  StyleSheet,
  ScrollViewProps,
  ViewStyle,
  View,
  StatusBar,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useTheme} from '../context/ThemeContext';

interface MainContainerProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  style,
  ...props
}) => {
  const {theme, mode} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.COLORS.primary}, style]}
      {...props}>
      <StatusBar backgroundColor={theme.COLORS.primary} barStyle={mode === 'dark' ? "light-content" : 'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
