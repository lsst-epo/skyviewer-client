export interface Destination {
  id: string;
  layerId: string;
  label: string;
  description?: string;
  ra: number;
  dec: number;
}

// Coordinates are placeholders; replace with real values
const destinations: Destination[] = [
  {
    id: "cosmic-treasure-chest",
    layerId: "15603",
    label: "Cosmic Treasure Chest (the Virgo Cluster)",
    description: "Southern region of the Virgo Cluster",
    ra: 187.77035,
    dec: 8.07268,
  },
  {
    id: "ocean-of-stars",
    layerId: "base",
    label: "Ocean of Stars",
    description: "A stellar field near our Galactic plane",
    ra: 225.53899,
    dec: -39.46849,
  },
];

export default destinations;
