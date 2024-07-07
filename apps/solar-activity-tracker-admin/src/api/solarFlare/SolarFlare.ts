export type SolarFlare = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  intensity: number | null;
};
