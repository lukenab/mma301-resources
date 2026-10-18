import { useFlights } from "@/features/flights/FlightsContext";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

import { Link } from "expo-router";

export default function Index() {
  const { flights, isLoading, updateFlightsCompletedStatus, deleteFlight } =
    useFlights();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>Loading Flights...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Flight Places</Text>

      <Link href="/add">Open add form</Link>

      <Link href="/completed">Visisted Flights</Link>

      <FlatList
        data={flights}
        keyExtractor={(flight) => flight.id}
        ListEmptyComponent={<Text>No flights addes yet.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Link
              href={{ pathname: "/flight/[id]", params: { id: item.id } }}
              asChild
            >
              <Pressable>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>Rating {item.rating}</Text>
              </Pressable>
            </Link>
            <Pressable
              onPress={() => {
                void updateFlightsCompletedStatus(item.id);
              }}
            >
              <Text>
                {item.completed ? "Mark as Pending" : "Mark as Completed"}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                Alert.alert(
                  "Delete",
                  `Are you sure you want to delete ${item.id}`,
                  [
                    { text: "Cancel", style: "cancel" },
                    {
                      text: "Delete",
                      style: "destructive",
                      onPress: () => void deleteFlight(item.id),
                    },
                  ],
                );
              }}
            >
              <Text>Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  empty: {
    marginTop: 24,
    textAlign: "center",
    color: "#666",
  },
  card: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
  },
});
