import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { todo } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Details</Text>
      <Text style={styles.content}>{todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  content: {
    fontSize: 18,
    color: "#555",
  },
});

export default DetailsScreen;
