export default {
  types: {
    star: true,
    galaxy: true,
    nebula: true,
    transient: true,
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
  },
};
