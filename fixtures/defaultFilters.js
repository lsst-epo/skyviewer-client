export default {
  sortBy: 0,
  possibleSorts: [
    {
      id: 0,
      type: "release",
      label: "Newest First",
    },
    {
      id: 1,
      type: "release",
      label: "Oldest First",
    },
    {
      id: 2,
      type: "tour",
      label: "Less Duration First",
    },
    {
      id: 3,
      type: "tour",
      label: "More Duration First",
    },
    {
      id: 4,
      type: "tour",
      label: "Less Complexity First",
    },
    {
      id: 5,
      type: "tour",
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
        label: "5 min",
        value: 5,
      },
      max: {
        label: "Far",
        value: 20,
      },
      step: 1,
      value: [5, 20],
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
