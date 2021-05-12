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
      // displayLabel: true,
      // labelColumn: "main_id",
      // labelColor: "#987654",
      // labelFont: "16px sans-serif",
      name: "Test HiPS 1",
      color: "#ffff00",
      shape: "triangle",
      // onClick: "showPopup",
    },
  },
  // {
  //   type: "HiPS",
  //   url: "http://axel.u-strasbg.fr/HiPSCatService/I/345/gaia2",
  //   options: {
  //     // labelColumn: "name",
  //     // labelColor: "#987654",
  //     labelFont: "16px sans-serif",
  //     name: "Test HiPS 2",
  //     color: "#190",
  //     shape: "square",
  //     onClick: "showPopup",
  //   },
  // },
];
