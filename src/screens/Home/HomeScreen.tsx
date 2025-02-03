import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MainContainer from '../../components/MainContainer';
import ChatItem from '../../components/Home/ChatItem';
import { useTypedNavigation } from '../../utils/navigationUtils';

const HomeScreen = () => {
  const { theme } = useTheme();

  const chats = [
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      time: '10:30 AM',
      avatar: '',
      unreadCount: 10
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule? Here is the second line of the last message. Below is some basic examples of messages.',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 0
    },
    {
      id: '3',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM. Here is the second line of the last message.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 0
    },
    {
      id: '4',
      name: 'John Doe',
      lastMessage: 'Hey, how are you? Here is the second line of the last message.',
      time: '10:30 AM',
      avatar: '',
      unreadCount: 5
    },
    {
      id: '5',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule? Here is the second line of the last message.',
      time: '09:15 AM',
      avatar: '',
      unreadCount: 22
    },
    {
      id: '6',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM. Here is the second line of the last message.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 100
    },
    {
      id: '7',
      name: 'John Doe',
      lastMessage: 'Hey, how are you? Here is the second line of the last message.',
      time: '10:30 AM',
      avatar: '',
      unreadCount: 109
    },
    {
      id: '8',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule? Here is the second line of the last message.',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 3
    },
    {
      id: '9',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM. Here is the second line of the last message.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 0
    },
    {
      id: '10',
      name: 'John Doe',
      lastMessage: 'Hey, how are you? Here is the second line of the last message.',
      time: '10:30 AM',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 8
    },
    {
      id: '11',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule? Here is the second line of the last message.',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 0
    },
    {
      id: '12',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM. Here is the second line of the last message.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
      unreadCount: 2
    },
  ];

  const navigation = useTypedNavigation<'StackScreens'>();

  return (
    <MainContainer>
      <View style={[
        // { paddingHorizontal: theme.SPACING.space_16, gap: theme.SPACING.space_15 }
      ]}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatItem item={item} onPress={() => {
              console.log(item, "item");
              navigation.navigate('StackScreens', { screen: 'Chat', params: { item } });
            }} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </MainContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})