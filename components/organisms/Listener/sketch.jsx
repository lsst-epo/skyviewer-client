"use client";
import { useEffect, useRef } from "react";
import P5 from "p5";
import PropTypes from "prop-types";
import { useAladin } from "@/contexts/Aladin";
import {
  controlledWalk,
  shiftStarTint,
  areArrowsPressed,
  raDecDistance,
  loadAudio,
} from "./utilities";
import parameters from "./parameters";
import PixelSynth from "./PixelSynth";
import Walker from "./Walker";
import PointSearcher from "./PointSearcher";
import SamplePlayer from "./SamplePlayer";

const Sketch = ({ pixelColor, cardinalSums }) => {
  const sketchRef = useRef(null);
  const p5Instance = useRef(null);
  const currentColor = useRef(pixelColor);
  const currentCardinalSums = useRef(cardinalSums);
  const { aladin } = useAladin();
  const emptyCircleRef = useRef(null);
  const starRef = useRef(null);
  const synthRef = useRef(null);
  const walkerRef = useRef(null);
  const pointSearcherRef = useRef(null);
  const samplePlayerRef = useRef(null);
  // Initialize synth
  useEffect(() => {
    // Create reference to the synth class
    synthRef.current = new PixelSynth();
  }, []);

  // Update the current color when pixelColor changes
  useEffect(() => {
    currentColor.current = pixelColor;
    currentCardinalSums.current = cardinalSums;
    // Update synth frequency when color changes and mouse is pressed
    if (synthRef.current && parameters.mouseIsPressed) {
      synthRef.current.playNote(pixelColor); // TODO: Do we actually need this? It's also happening on line 113
    }
  }, [pixelColor, cardinalSums]);

  useEffect(() => {
    if (walkerRef.current && parameters.isSonificationPlaying) {
      walkerRef.current.cardinalSums = currentCardinalSums.current;
      walkerRef.current.cardinalSumCounter();
      walkerRef.current.boundaryCheck();
    }
  }, [cardinalSums]);

  useEffect(() => {
    if (pointSearcherRef.current) {
      pointSearcherRef.current.updatePoints();
    }
  }, []); // TODO: Add a dependency for FOV, PixelColor, CardinalSums, etc.

  // Create the sketch only once
  useEffect(() => {
    if (!aladin) return;

    const size = aladin.getSize();
    p5Instance.current = new P5((p) => {
      p.setup = () => {
        // Create the canvas with the same size as the aladin image
        p.createCanvas(size[0], size[1]);
        // Make the canvas non-interactive
        p.canvas.style.pointerEvents = "none";
        const audioPromises = [];
        for (const instrument of parameters.instruments) {
          for (let i = parameters.midiMin; i <= parameters.midiMax; i++) {
            audioPromises.push(
              loadAudio(
                `${instrument}_${i}`,
                `/sonification/sounds/${instrument}/${i}.mp3`
              )
            );
          }
        }
        // Load the rubin empty circle and star images
        p.loadImage("/sonification/rubin-circle-empty.png", (img) => {
          emptyCircleRef.current = img;
        });
        p.loadImage("/sonification/rubin-star.png", (img) => {
          starRef.current = img;
        });
        // Initialize the walker with p5 instance and aladin
        walkerRef.current = new Walker(p, aladin);
        // Initialize the point searcher with p5 instance and aladin
        pointSearcherRef.current = new PointSearcher(p, aladin);
        pointSearcherRef.current.makeSubset(
          [58.22810300000001, -36.72068300000001],
          0.025
        ); // TDOD: Make these variables that get updated in the setup loop
        // Get the initial points from the point searcher on first load
        // pointSearcherRef.current.getPoints(); // TODO: Figure out what arguments to pass in
        samplePlayerRef.current = new SamplePlayer(aladin);
      };

      p.draw = () => {
        p.clear(); // Clear the canvas before drawing the empty circle and star to avoid ghosting

        const [ra, dec] = aladin.getRaDec();
        const [FOVra, FOVdec] = aladin.getFov();
        if (p.frameCount % 60 === 0) {
          // Get the current RA/Dec from Aladin and update points
          const FOVRadius = Math.sqrt(
            Math.pow(FOVra / 2, 2) + Math.pow(FOVdec / 2, 2)
          );
          pointSearcherRef.current.makeSubset([ra, dec], FOVRadius);
        }
        const eastPoint = aladin.pix2world(
          p.width / 2 + parameters.targetRadiusPX,
          p.height / 2
        ); // TODO: Replace 50 with variable tied to circle
        const tartgetRadiusRaDec = raDecDistance(
          ra,
          dec,
          eastPoint[0],
          eastPoint[1]
        );
        pointSearcherRef.current.findNeighbours([ra, dec], tartgetRadiusRaDec);
        // Update and draw animations
        if (pointSearcherRef.current) {
          pointSearcherRef.current.updateAndDrawAnimations();
        }
        if (
          pointSearcherRef.current.newNearestNeighbours &&
          pointSearcherRef.current.newNearestNeighbours.length > 0
        ) {
          const pointsToTrigger =
            pointSearcherRef.current.newNearestNeighbours.slice(0, 8); // Limit to at most 8 points
          samplePlayerRef.current.triggerPoints(pointsToTrigger);
        }

        // Draw the empty circle without tint
        if (emptyCircleRef.current) {
          p.noTint();
          p.imageMode(p.CENTER);
          p.image(emptyCircleRef.current, p.width / 2, p.height / 2, 100, 100);
        }
        // Draw the star with the current color tint
        if (starRef.current) {
          p.tint(shiftStarTint(currentColor.current));
          p.imageMode(p.CENTER);
          p.image(starRef.current, p.width / 2, p.height / 2, 60, 60);
        }
        // If sonification is playing and mouse is not pressed, walk the star automatically
        if (!parameters.mouseIsPressed) {
          if (areArrowsPressed(p)) {
            controlledWalk(p, aladin);
            synthRef.current.playNote(currentColor.current);
          } else if (parameters.isSonificationPlaying) {
            walkerRef.current.walk();
            synthRef.current.playNote(currentColor.current);
          } else {
            synthRef.current.setAmplitude(0); // Stop the sound
          }
        }
      };

      p.mousePressed = (event) => {
        // Check if the click originated from a UI control
        const isUIControl = event.target.closest(".controls") !== null;
        if (!isUIControl) {
          parameters.mouseIsPressed = true;
          synthRef.current.playNote(currentColor.current);
        }
      };

      p.mouseReleased = () => {
        parameters.mouseIsPressed = false;
        if (synthRef.current) {
          synthRef.current.setAmplitude(0); // Stop the sound
        }
      };
    }, sketchRef.current);

    return () => {
      p5Instance.current.remove();
    };
  }, [aladin]); // Add aladin as dependency

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={sketchRef}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

Sketch.propTypes = {
  pixelColor: PropTypes.arrayOf(PropTypes.number).isRequired,
  cardinalSums: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Sketch;
