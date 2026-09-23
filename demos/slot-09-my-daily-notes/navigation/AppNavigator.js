import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NoteDetailScreen from "../screens/NoteDetailScreen";
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My Daily Notes",
        }}
      />
      <Stack.Screen
        name="NoteDetail"
        component={NoteDetailScreen}
        options={{ title: "Note" }}
      />
    </Stack.Navigator>
  );
}
export default AppNavigator;
