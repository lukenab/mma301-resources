export type Flight = {
  id: string;
  name: string;
  address: string;
  type: string;
  rating: number;
  completed: boolean;
};

export type NewFlight = Omit<Flight, "id" | "completed">;
