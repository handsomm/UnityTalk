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
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule?',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '4',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      time: '10:30 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '5',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule?',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '6',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '7',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      time: '10:30 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '8',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule?',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '9',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '10',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      time: '10:30 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '11',
      name: 'Jane Smith',
      lastMessage: 'Can we reschedule?',
      time: '09:15 AM',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: '12',
      name: 'Team Unity',
      lastMessage: 'Meeting is at 3 PM.',
      time: 'Yesterday',
      avatar: 'https://via.placeholder.com/50',
    },
  ];

  const navigation = useTypedNavigation<'StackScreens'>();

  return (
    <MainContainer>
      <View style={[
        { paddingHorizontal: theme.SPACING.space_16, gap: theme.SPACING.space_15 }
      ]}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatItem item={item} onPress={() => {
              console.log(item, "item");
              navigation.navigate('StackScreens', { screen: 'Chat', params: {item} });
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