import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { useTheme } from '../../context/ThemeContext';

type ChatItemProps = {
  item: ChatItem,
  onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ item, onPress }) => {
  const { theme } = useTheme();

  const getInitials = (name: string) => {
    if (!name) return "";
    const words = name.split(" ");
    return words.length > 1
      ? `${words[0][0]}${words[words.length - 1][0]}`
      : words[0][0];
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {item.avatar ? (
        <Image source={{ uri: item.avatar }} style={[styles.avatar, { borderRadius: theme.borderRadii.radius30 }]} />
      ) : (
        <View
          style={[
            styles.avatar,
            { backgroundColor: theme.colors.secondary, borderRadius: theme.borderRadii.radius30, justifyContent: 'center', alignItems: 'center' },
          ]}
        >
          <Text style={{ color: theme.colors.accent, fontSize: theme.fontSizes.size16, fontWeight: 'bold', textTransform: 'uppercase' }} >
            {getInitials(item.name)}
          </Text>
        </View>
      )}
      <View style={[styles.chatInfo, { borderBottomColor: theme.colors.gray400 }]}>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={{ color: theme.colors.tint, fontSize: theme.fontSizes.size16, fontWeight: 'bold' }} numberOfLines={1}>
            {item.name}
          </Text>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontSize: theme.fontSizes.size14,
              lineHeight: 18,
              minHeight: 36,
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.lastMessage || " "}
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: theme.fontSizes.size12, color: item.unreadCount > 0 ? theme.colors.success : theme.colors.gray, }}>
            {item.time}
          </Text>
          {item.unreadCount > 0 && (
            <View
              style={{
                backgroundColor: theme.colors.success,
                borderRadius: 12,
                minWidth: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 4,
                paddingHorizontal: 6,
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  fontSize: theme.fontSizes.size12,
                  fontWeight: "bold",
                }}
              >
                {item.unreadCount > 99 ? "99+" : item.unreadCount}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ChatItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  avatar: {
    width: 55,
    height: 55,
    margin: 10,
  },
  chatInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingVertical: 10,
  }
});