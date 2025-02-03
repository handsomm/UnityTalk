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
        <Image source={{ uri: item.avatar }} style={[styles.avatar, { borderRadius: theme.BORDERRADIUS.radius_30 }]} />
      ) : (
        <View
          style={[
            styles.avatar,
            { backgroundColor: theme.COLORS.secondary, borderRadius: theme.BORDERRADIUS.radius_30, justifyContent: 'center', alignItems: 'center' },
          ]}
        >
          <Text style={{ color: theme.COLORS.accent, fontSize: theme.FONTSIZE.size_16, fontWeight: 'bold', textTransform: 'uppercase' }} >
            {getInitials(item.name)}
          </Text>
        </View>
      )}
      <View style={[styles.chatInfo, { borderBottomColor: theme.COLORS.lightGreyHex }]}>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={{ color: theme.COLORS.tint, fontSize: theme.FONTSIZE.size_16, fontWeight: 'bold' }} numberOfLines={1}>
            {item.name}
          </Text>
          <Text
            style={{
              color: theme.COLORS.tertiary,
              fontSize: theme.FONTSIZE.size_14,
              lineHeight: 18,
              minHeight: 36,
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.lastMessage || " "}
          </Text>
        </View>
        <Text style={{ fontSize: theme.FONTSIZE.size_12, color: theme.COLORS.greyHex }}>{item.time}</Text>
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