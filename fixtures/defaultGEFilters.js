export default {
  sortBy: "0",
  possibleSorts: [
    {
      id: "0",
      type: "release",
      direction: "descending",
      label: "Newest First",
    },
    {
      id: "1",
      type: "release",
      direction: "ascending",
      label: "Oldest First",
    },
    {
      id: "2",
      type: "duration",
      direction: "ascending",
      label: "Less Duration First",
    },
    {
      id: "3",
      type: "duration",
      direction: "descending",
      label: "More Duration First",
    },
    {
      id: "4",
      type: "complexity",
      direction: "ascending",
      label: "Less Complexity First",
    },
    {
      id: "5",
      type: "complexity",
      direction: "descending",
      label: "More Complexity First",
    },
  ],
  themes: {
    stars: true,
    planets: true,
    galaxies: true,
    nebulae: true,
    constellations: true,
  },
  characteristics: {
    duration: {
      min: {
        label: "2 min",
        value: 2,
      },
      max: {
        label: "10 min",
        value: 10,
      },
      step: 1,
      value: [2, 10],
    },
    complexity: {
      min: {
        label: "Easy",
        value: 1,
      },
      max: {
        label: "Complex",
        value: 5,
      },
      step: 1,
      value: [1, 5],
    },
  },
};
