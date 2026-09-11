import { View, Text, StyleSheet } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.content}>Configure your app preferences here.</Text>
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

export default SettingScreen;
