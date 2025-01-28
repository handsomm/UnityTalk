import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

type ChatItemProps = {
  item: ChatItem,
  onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ item, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={onPress}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.time}>{item.time}</Text>
        <Icon name="chevron-right" size={24} color="#888" />
      </View>
    </TouchableOpacity>
  )
}

export default ChatItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
});