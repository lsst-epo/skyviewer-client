export default {
  types: {
    stars: true,
    galaxies: true,
    nebulae: true,
    transients: true,
  },
  characteristics: {
    distance: {
      min: {
        label: "Near",
        value: 0,
      },
      max: {
        label: "Far",
        value: 384,
      },
      step: 1,
      value: [0, 384],
    },
    brightness: {
      min: {
        label: "Dim",
        value: 0,
      },
      max: {
        label: "Bright",
        value: 626,
      },
      step: 1,
      value: [0, 626],
    },
    score: {
      min: {
        label: "Low Score",
        value: 0,
      },
      max: {
        label: "High Score",
        value: 10,
      },
      step: 0.1,
      value: [0, 10],
    },
  },
};
