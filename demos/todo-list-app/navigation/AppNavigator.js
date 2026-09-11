import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import InfoScreen from "../screens/InfoScreen";
import SettingsScreen from "../screens/SettingScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "To-do List" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Task Details" }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{ title: "About" }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Main"
          component={TabNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
