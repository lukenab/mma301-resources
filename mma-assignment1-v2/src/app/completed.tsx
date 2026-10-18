import { useFlights } from "@/features/flights/FlightsContext";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function CompletedFlightScreen() {
  const { flights } = useFlights();
  const completedFlights = flights.filter((flight) => flight.completed);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visited Flights</Text>

      <FlatList
        data={completedFlights}
        keyExtractor={(flight) => flight.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No completed flights yet.</Text>
        }
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Completed</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 16,
  },
  empty: {
    marginTop: 24,
    textAlign: "center",
    color: "#666",
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
  },
});
