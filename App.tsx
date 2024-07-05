import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {
  ThemeProvider,
  useTheme,
} from './src/context/ThemeContext';

const App = () => {
  const {theme, mode} = useTheme();

  if (!theme) {
    return <ActivityIndicator />;
  }

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
