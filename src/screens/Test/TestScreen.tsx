import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';
import { useTheme } from '../../context/ColorSchemeContext';
import { themes } from '../../themes';

const TestScreen = () => {
  const { theme, switchTheme, setMode, mode, toggle } = useTheme();

  console.log(mode, "colorScheme")


  return (
    <MainContainer
      header={<CustomHeader heroText='Test' icon='spinner' />}
      style={{ justifyContent: "center" }}
    >

      <Text style={{ color: theme.colors.primary }}>primary</Text>
      <Text style={{ color: theme.colors.secondary }}>secondary</Text>
      <Text style={{ color: theme.colors.tertiary }}>tertiary</Text>
      <Text style={{ color: theme.colors.accent }}>accent</Text>
      <Text style={{ color: theme.colors.tint }}>tint</Text>

      <Text>Semantic Colors</Text>
      <Text style={{ color: theme.colors.danger }}>danger</Text>
      <Text style={{ color: theme.colors.info }}>info</Text>
      <Text style={{ color: theme.colors.success }}>success</Text>
      <Text style={{ color: theme.colors.warning }}>warning</Text>

      <Text>Neutral Colors</Text>
      <Text style={{ color: theme.colors.black }}>black</Text>
      <Text style={{ color: theme.colors.white }}>white</Text>


      <Text style={{ color: theme.colors.gray }}>gray</Text>
      <Text style={{ color: theme.colors.gray100 }}>gray100</Text>
      <Text style={{ color: theme.colors.gray200 }}>gray200</Text>
      <Text style={{ color: theme.colors.gray400 }}>gray400</Text>
      <Text style={{ color: theme.colors.gray600 }}>gray600</Text>

      <Text>Chat Bubble Colors</Text>
      <Text style={{ color: theme.colors.chatBubbleIncoming }}>chatBubbleIncoming</Text>
      <Text style={{ color: theme.colors.chatBubbleOutgoing }}>chatBubbleOutgoing</Text>
      <Text style={{ color: theme.colors.statusbar }}>statusbar</Text>

      <Button title="Switch to Basic" onPress={() => switchTheme('basic')} />
      <Button title="Switch to Elegant" onPress={() => switchTheme('elegant')} />
      <Button title="Toggle Mode" onPress={toggle} />
      <Button title="Light Mode" onPress={() => setMode('light')} />
      <Button title="Dark Mode" onPress={() => setMode('dark')} />
      <Button title="System Mode" onPress={() => setMode('system')} />
    </MainContainer>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});