import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Flight, NewFlight } from "./flight";
import { getFlights, saveFlights } from "./flightStorage";

type FLightsContextValue = {
  flights: Flight[];
  isLoading: boolean;
  addFlight: (newFlight: NewFlight) => Promise<void>;
  updateFlightsCompletedStatus: (flightId: string) => Promise<void>;
  deleteFlight: (flightId: string) => Promise<void>;
  updateFlight: (flightId: string, updatedData: NewFlight) => Promise<void>;
};

const FlightsContext = createContext<FLightsContextValue | undefined>(
  undefined,
);

type FlightsProviderProps = {
  children: ReactNode;
};

export function FlightsProvider({ children }: FlightsProviderProps) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function addFlight(newFlight: NewFlight): Promise<void> {
    const flight: Flight = {
      ...newFlight,
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      completed: false,
    };

    const updatedFlights = [...flights, flight];

    await saveFlights(updatedFlights);
    setFlights(updatedFlights);
  }

  async function updateFlight(
    flightId: string,
    updatedData: NewFlight,
  ): Promise<void> {
    const updatedFlights = flights.map((flight) =>
      flight.id === flightId ? { ...flight, ...updatedData } : flight,
    );

    await saveFlights(updatedFlights);
    setFlights(updatedFlights);
  }

  async function updateFlightsCompletedStatus(flightId: string): Promise<void> {
    const updatedFlights = flights.map((flight) =>
      flight.id === flightId
        ? { ...flight, completed: !flight.completed }
        : flight,
    );

    await saveFlights(updatedFlights);
    setFlights(updatedFlights);
  }

  async function deleteFlight(flightId: string): Promise<void> {
    const updateFlights = flights.filter((flight) => flight.id !== flightId);

    await saveFlights(updateFlights);
    setFlights(updateFlights);
  }

  useEffect(() => {
    let isActive = true;

    async function getSavedFlights(): Promise<void> {
      try {
        const flights = await getFlights();
        if (isActive) {
          setFlights(flights);
        }
      } catch (error) {
        console.error("Failed to get Flights.");
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }
    void getSavedFlights();
    return () => {
      isActive = false;
    };
  }, []);

  const value = {
    flights,
    isLoading,
    addFlight,
    updateFlightsCompletedStatus,
    deleteFlight,
    updateFlight
  };

  return (
    <FlightsContext.Provider value={value}>{children}</FlightsContext.Provider>
  );
}

export function useFlights(): FLightsContextValue {
  const context = useContext(FlightsContext);

  if (context === undefined) {
    throw new Error("useFlights must be used within Provider.");
  }

  return context;
}
