import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = React.memo(({ item, onPress, onDelete }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  delete: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TodoItem;
