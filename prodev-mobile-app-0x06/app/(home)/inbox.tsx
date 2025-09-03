import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const messages = [
  {
    id: '1',
    from: 'Property Owner',
    subject: 'Your booking request',
    preview: 'Your booking request has been approved!',
    time: '2h ago',
    read: false,
  },
  {
    id: '2',
    from: 'Support Team',
    subject: 'Welcome to ProDev',
    preview: 'Thank you for joining ProDev!',
    time: '1d ago',
    read: true,
  },
];

const Inbox = () => {
  const renderMessage = ({ item }) => (
    <View style={[styles.messageItem, !item.read && styles.unreadMessage]}>
      <View style={styles.avatar}>
        <MaterialCommunityIcons name="account" size={32} color="#666" />
      </View>
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.sender}>{item.from}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={styles.preview} numberOfLines={1}>{item.preview}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.messageList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageList: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  unreadMessage: {
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  sender: {
    fontWeight: '600',
    fontSize: 16,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  subject: {
    fontWeight: '500',
    marginBottom: 2,
  },
  preview: {
    color: '#666',
    fontSize: 14,
  },
});

export default Inbox;