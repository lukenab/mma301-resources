import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComponentListScreen from "../screens/ComponentListScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ExamplesScreen from "../screens/ExamplesScreen";
import ReconciliationScreen from "../screens/ReconciliationScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { colors } from "../theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TAB_ICONS = {
  Rendering: "refresh-outline",
  Components: "grid-outline",
  Lists: "list-outline",
};

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    primary: colors.primary,
    text: colors.text,
    border: colors.border,
  },
};

const sharedHeaderOptions = {
  headerLeft: () => <DrawerToggleButton tintColor={colors.primaryDark} />,
  headerShadowVisible: false,
  headerStyle: { backgroundColor: colors.surface },
  headerTitleStyle: { color: colors.primaryDark, fontWeight: "700" },
};

function ComponentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ComponentListScreen}
        name="ComponentList"
        options={{ ...sharedHeaderOptions, title: "Component List" }}
      />
      <Stack.Screen
        component={DetailsScreen}
        name="Details"
        options={({ route }) => ({
          headerShadowVisible: false,
          title: route.params?.item?.name ?? "Details",
        })}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarIcon: ({ color, size }) => (
          <Ionicons color={color} name={TAB_ICONS[route.name]} size={size} />
        ),
        tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
        tabBarStyle: { borderTopColor: colors.border },
      })}
    >
      <Tab.Screen
        component={ReconciliationScreen}
        name="Rendering"
        options={{ ...sharedHeaderOptions, title: "Rendering Lab" }}
      />
      <Tab.Screen
        component={ExamplesScreen}
        name="Components"
        options={{ ...sharedHeaderOptions, title: "Basic Components" }}
      />
      <Tab.Screen
        component={ComponentStack}
        name="Lists"
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: colors.primarySoft,
          drawerActiveTintColor: colors.primaryDark,
          drawerInactiveTintColor: colors.textMuted,
          headerShadowVisible: false,
        }}
      >
        <Drawer.Screen
          component={MainTabs}
          name="MainLab"
          options={{ headerShown: false, title: "Component Lab" }}
        />
        <Drawer.Screen component={SettingsScreen} name="Settings" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
