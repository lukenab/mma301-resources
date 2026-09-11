import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>To-do List App</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Main")}
        labelStyle={styles.label}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate("Settings")}
        labelStyle={styles.label}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});

export default CustomDrawerContent;
