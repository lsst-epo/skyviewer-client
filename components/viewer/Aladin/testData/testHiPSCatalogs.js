export default [
  {
    type: "HiPS",
    url: "http://localhost:5000",
    //url: "https://axel.u-strasbg.fr/HiPSCatService/Simbad",
    options: {
      // displayLabel: true,
      // labelColumn: "main_id",
      // labelColor: "#987654",
      // labelFont: "16px sans-serif",
      name: "CDS_P_AKARI_FIS_Color",
      color: "#ffff00",
      shape: "triangle",
      onClick: "showPopup",
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

//url: "https://data.darts.isas.jaxa.jp/pub/judo2/HiPS/SWIFT-BAT_CAT",
// https://axel.u-strasbg.fr/HiPSCatService/Simbad/Norder3/Dir0/Npix451.tsv