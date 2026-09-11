import { View, Text, StyleSheet } from "react-native";

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About To-do List App</Text>
      <Text style={styles.content}>
        This is a simple app to manage your tasks. Built with React Native and
        Expo.
      </Text>
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

export default InfoScreen;
