import {
  ActivityIndicator,
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  Button
} from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFlights } from "@/features/flights/FlightsContext";

export default function EditFlightScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { flights, isLoading, updateFlight } = useFlights();

  const flight = flights.find((flight) => flight.id === id);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (flight) {
      setName(flight.name);
      setAddress(flight.address);
      setType(flight.type);
      setRating(String(flight.rating));
    }
  }, [flight]);

  async function handleUpdate() {
    const numericRating = Number(rating);

    if (
      !name.trim() ||
      !address.trim() ||
      !type.trim() ||
      !rating.trim() ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      Alert.alert("Error", "Enter all information correctly (1-5).");
      return;
    }

    if (!flight) {
      return;
    }

    await updateFlight(flight.id, {
      name: name.trim(),
      address: address.trim(),
      type: type.trim(),
      rating: numericRating,
    });

    router.back();
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!flight) {
    return (
      <View style={styles.center}>
        <Text>Flight not found.</Text>
      </View>
    );
  }

  return (<View style={styles.container}>
    <Text>Flight Number</Text>
    <TextInput value={name} onChangeText={setName}/>

    <Text>Route</Text>
    <TextInput value={address} onChangeText={setAddress}/>

    <Text>Airline</Text>
    <TextInput value={type} onChangeText={setType}/>

    <Text>Rating</Text>
    <TextInput value={rating} onChangeText={setRating} keyboardType="number-pad"/>

    <Button title="Update" onPress={handleUpdate}/>
  </View>);
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
