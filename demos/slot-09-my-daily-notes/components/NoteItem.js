import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
// Sử dụng React.memo để tối ưu hóa, chỉ re-render khi props.note hoặc props.onPress/onDelete thay đổi
const NoteItem = React.memo(({ note, onPress, onDelete }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.cardBackground }]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
          {note.title || "Untitled Note"}
        </Text>
        <Text style={[styles.content, { color: theme.text }]} numberOfLines={2}>
          {note.content || "No content"}
        </Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Ionicons name="trash" size={20} color={theme.deleteButton} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
  },
  deleteButton: {
    padding: 8,
  },
});
export default NoteItem;
