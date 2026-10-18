import { useFlights } from "@/features/flights/FlightsContext";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function FlightDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { flights, isLoading } = useFlights();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  const flight = flights.find((flight) => flight.id === id);
  if (!flight) {
    return (
      <View style={styles.center}>
        <Text>Flight not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Number {flight.name}</Text>
      <Text>Route: {flight.address}</Text>
      <Text>Airline: {flight.type}</Text>
      <Text>{flight.rating}</Text>
      <Text>{flight.completed ? "Completed" : "Pending"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
