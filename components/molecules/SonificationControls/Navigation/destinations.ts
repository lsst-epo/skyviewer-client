export interface Destination {
  id: string;
  label: string;
  description?: string;
  ra: number;
  dec: number;
}

// Coordinates are placeholders; replace with real values
const destinations: Destination[] = [
  {
    id: "cosmic-treasure-chest",
    label: "Cosmic Treasure Chest (the Virgo Cluster)",
    description: "Southern region of the Virgo Cluster",
    ra: 187.77035,
    dec: 8.07268,
  },
  {
    id: "ocean-of-stars",
    label: "Ocean of Stars",
    description: "A stellar field near our Galactic plane",
    ra: 225.53899,
    dec: -39.46849,
  },
];

export default destinations;
