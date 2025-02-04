import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';
import CustomHeader from '../../components/CustomHeader';

const TestScreen = () => {
  const { theme, mode, toggleMode, switchTheme, setThemeMode } = useTheme();


  return (
    <MainContainer style={{ justifyContent: "center" }}>
      <CustomHeader heroText='Test' icon='spinner' />

      <Text style={{ color: theme.COLORS.primary }}>primary</Text>
      <Text style={{ color: theme.COLORS.secondary }}>secondary</Text>
      <Text style={{ color: theme.COLORS.tertiary }}>tertiary</Text>
      <Text style={{ color: theme.COLORS.accent }}>accent</Text>
      <Text style={{ color: theme.COLORS.tint }}>tint</Text>

      <Text>Semantic Colors</Text>
      <Text style={{ color: theme.COLORS.danger }}>danger</Text>
      <Text style={{ color: theme.COLORS.info }}>info</Text>
      <Text style={{ color: theme.COLORS.success }}>success</Text>
      <Text style={{ color: theme.COLORS.warning }}>warning</Text>

      <Text>Neutral Colors</Text>
      <Text style={{ color: theme.COLORS.black }}>black</Text>
      <Text style={{ color: theme.COLORS.white }}>white</Text>


      <Text style={{ color: theme.COLORS.gray }}>gray</Text>
      <Text style={{ color: theme.COLORS.gray100 }}>gray100</Text>
      <Text style={{ color: theme.COLORS.gray200 }}>gray200</Text>
      <Text style={{ color: theme.COLORS.gray400 }}>gray400</Text>
      <Text style={{ color: theme.COLORS.gray600 }}>gray600</Text>

      <Text>Chat Bubble Colors</Text>
      <Text style={{ color: theme.COLORS.chatBubbleIncoming }}>chatBubbleIncoming</Text>
      <Text style={{ color: theme.COLORS.chatBubbleOutgoing }}>chatBubbleOutgoing</Text>
      <Text style={{ color: theme.COLORS.statusbar }}>statusbar</Text>

      <Button title="Switch to Basic" onPress={() => switchTheme('basic')} />
      <Button title="Switch to Elegant" onPress={() => switchTheme('elegant')} />
      <Button title="Toggle Mode" onPress={toggleMode} />
      <Button title="Light Mode" onPress={() => setThemeMode('light')} />
      <Button title="Dark Mode" onPress={() => setThemeMode('dark')} />
      <Button title="System Mode" onPress={() => setThemeMode('light', 'system')} />
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