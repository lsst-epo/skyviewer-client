// other working catalog url
// "https://data.darts.isas.jaxa.jp/pub/judo2/HiPS/SWIFT-BAT_CAT"

// staging catalog url
// "https://epo-hips.netlify.app/catalog_skyviewer"

// localhost catalog url
// "http://localhost:5000/catalog"

export default [
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_stars",
    options: {
      name: "star",
      sourceSize: 20,
      shape: "/shapes/star-icon.png",
    },
  },
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_galaxies",
    options: {
      name: "galaxy",
      sourceSize: 20,
      shape: "/shapes/galaxy-icon.png",
    },
  },
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_nebulae",
    options: {
      name: "nebula",
      sourceSize: 20,
      shape: "/shapes/nebula-icon.png",
    },
  },
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_transients",
    options: {
      name: "transient",
      sourceSize: 20,
      shape: "/shapes/transient-icon.png",
    },
  },
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_goals",
    options: {
      name: "goal",
      sourceSize: 20,
      shape: "/shapes/fun-goal-icon.png",
    },
  },
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_landmarks",
    options: {
      name: "landmark",
      sourceSize: 20,
      shape: "/shapes/landmark-icon.png",
    },
  },
  // {
  //   type: "HiPS",
  //   url: "https://epo-hips.netlify.app/catalog_akari",
  //   options: {
  //     // labelColumn: "name",
  //     // labelColor: "#987654",
  //     labelFont: "16px sans-serif",
  //     name: "Test HiPS 2",
  //     color: "#190",
  //     shape: "square",
  //   },
  // },
];
