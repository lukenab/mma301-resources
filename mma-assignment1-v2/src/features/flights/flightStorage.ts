import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Flight } from "./flight";

const FLIGHTS_STORAGE = "flights";

export async function getFlights(): Promise<Flight[]> {
  const flights = await AsyncStorage.getItem(FLIGHTS_STORAGE);

  if (flights === null) {
    return [];
  }

  return JSON.parse(flights) as Flight[];
}

export async function saveFlights(flights: Flight[]): Promise<void> {
  const serializedFlights = JSON.stringify(flights);

  await AsyncStorage.setItem(FLIGHTS_STORAGE, serializedFlights);
}

