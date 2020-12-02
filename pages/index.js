import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const getShape = (stuff) => {
    const star = new Image();
    star.src = "grade-24px.svg";
    return star;
  };
  useEffect(() => {
    // Initialize aladin
    const aladinGlobal = window.A;
    const aladin = aladinGlobal.aladin("#aladin-lite-div", {
      survey: "allwise",
      fov: 1.5,
      target: "M 20",
      showLayersControl: false,
      showGotoControl: true,
      showShareControl: false,
      showFrame: false,
      // fullScreen: true,
      showFullscreenControl: false,
      showReticle: false,
    });
    // Restrict FOV
    aladin.setFovRange(0.03, 80);
    // Test Markers
    const marker1 = aladinGlobal.marker(270.332621, -23.078944, {
      popupTitle: "PSR B1758-23",
      popupDesc: "Object type: Pulsar",
    });
    const marker2 = aladinGlobal.marker(270.63206, -22.90555, {
      popupTitle: "HD 164514",
      popupDesc: "Object type: Star in cluster",
    });
    const marker3 = aladinGlobal.marker(270.598121, -23.030819, {
      popupTitle: "HD 164492",
      popupDesc: "Object type: Double star",
    });
    const markerLayer = aladinGlobal.catalog({ color: "#800080" });
    aladin.addCatalog(markerLayer);
    markerLayer.addSources([marker1, marker2, marker3]);
    // Test loading external catalogues

    aladin.addCatalog(
      aladinGlobal.catalogFromSimbad("M 20", 0.2, {
        shape: getShape(),
        color: "#5d5",
        onClick: "showTable",
      })
    );
    aladin.addCatalog(
      aladinGlobal.catalogFromVizieR("J/ApJ/562/446/table13", "M 20", 0.2, {
        shape: "square",
        sourceSize: 8,
        color: "red",
        onClick: "showPopup",
      })
    );
    // aladin.displayJPG('http://cdn.eso.org/images/screen/eso0930a.jpg');
    // eslint-disable-next-line no-console
    console.log("mount");

    // aladin.on('zoomChanged', (event) => {
    //   console.log('zoom', event);
    // })

    // aladin.on('select', (event) => {
    //   console.log('select', event);
    // })

    aladin.on("objectClicked", (event) => {
      // eslint-disable-next-line no-console
      console.log("objectClicked", event);
    });

    // aladin.on('objectHovered', (event) => {
    //   console.log('objectHovered', event);
    // })

    // aladin.on('footprintClicked', (event) => {
    //   console.log('footprintClicked', event);
    // })

    // aladin.on('footprintHovered', (event) => {
    //   console.log('footprintHovered', event);
    // })

    // aladin.on('positionChanged', (event) => {
    //   console.log('positionChanged', event);
    // })

    aladin.on("click", (event) => {
      // eslint-disable-next-line no-console
      console.log("click", event);
    });

    // aladin.on('mouseMove', (event) => {
    //   console.log('mouseMove', event);
    // })

    // aladin.on('fullScreenToggled', (event) => {
    //   console.log('fullScreenToggled', event);
    // })
  }, []);

  return (
    <div>
      <main>
        {/* Aladin Lite container at requested dimensions */}
        <div id="aladin-lite-div" style={{ width: "100vw", height: "100vh" }} />
      </main>
    </div>
  );
}
