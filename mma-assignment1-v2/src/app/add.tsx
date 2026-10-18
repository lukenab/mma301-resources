import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useFlights } from "@/features/flights/FlightsContext";
import {useRouter} from "expo-router"


export default function AddFlightScreen() {
  const { addFlight } = useFlights();
  const router = useRouter();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  async function handleSave() {
    const numericRating = Number(rating);

    if (
      !name.trim() ||
      !address.trim() ||
      !type.trim() ||
      !rating.trim() ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      Alert.alert(
        "Error",
        "Please enter all information correctly (rating 1-5)",
      );
      return;
    }

    await addFlight({
      name: name.trim(),
      address: address.trim(),
      type: type.trim(),
      rating: numericRating,
    });

    router.back();
  }

  return (
    <View style={styles.container}>
      <Text>Flight Number</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Route</Text>
      <TextInput value={address} onChangeText={setAddress} />

      <Text>AirLine</Text>
      <TextInput value={type} onChangeText={setType} />

      <Text>Rating (1-5)</Text>
      <TextInput value={rating} onChangeText={setRating} />

      <Button
        title="Save"
        onPress={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
});