import { Stack } from "expo-router";
import { FlightsProvider } from "@/features/flights/FlightsContext";

export default function RootLayout() {
  return (
    <FlightsProvider>
      <Stack />
    </FlightsProvider>
  );
}
