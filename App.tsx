import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, SafeAreaView } from 'react-native';
import useTheme from './src/themes/useTheme';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  const [theme] = useTheme();

  if (!theme) {
    return <ActivityIndicator/>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerNavigator/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
