// other working catalog url
// "https://data.darts.isas.jaxa.jp/pub/judo2/HiPS/SWIFT-BAT_CAT"

// staging catalog url
// "https://epo-hips.netlify.app/catalog_skyviewer"

// localhost catalog url
// "http://localhost:5000/catalog"

export default [
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_skyviewer",
    options: {
      name: "Test HiPS 1",
      sourceSize: "20",
      shape: "/shapes/landmark-icon.svg",
    },
  },
  {
    type: "HiPS",
    url: "https://epo-hips.netlify.app/catalog_akari",
    options: {
      name: "Test HiPS 2",
      sourceSize: "20",
      shape: "/shapes/galaxy-icon.svg",
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
