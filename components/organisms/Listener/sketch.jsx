"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import P5 from "p5";
import PropTypes from "prop-types";
import {
  controlledWalk,
  shiftStarTint,
  areArrowsPressed,
  loadAudio,
} from "./utilities";
import parameters from "./parameters";
import PixelSynth from "./PixelSynth";
import Walker from "./Walker";
import PointSearcher from "./PointSearcher";
import SamplePlayer from "./SamplePlayer";
import { useAladin } from "@/contexts/Aladin";
import useAladinEvent from "@/hooks/useAladinEvent";

const Sketch = ({ pixelColor, cardinalSums }) => {
  const sketchRef = useRef(null);
  const p5Instance = useRef(null);
  const currentColor = useRef(pixelColor);
  const currentCardinalSums = useRef(cardinalSums);
  const { aladin } = useAladin();
  const [isP5Ready, setIsP5Ready] = useState(false);
  const emptyCircleRef = useRef(null);
  const starRef = useRef(null);
  const synthRef = useRef(null);
  const walkerRef = useRef(null);
  const pointSearcherRef = useRef(null);
  const samplePlayerRef = useRef(null);

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

  const handleResize = useCallback(
    ({ detail }) => {
      if (aladin) {
        const size = aladin.getSize();
        if (p5Instance.current && p5Instance.current.resizeCanvas) {
          p5Instance.current.resizeCanvas(size[0], size[1]); // Resize the P5 canvas to match Aladin's size
          parameters.targetPointPX[0] = size[0] / 2; // Recenter the target point in the canvas
          parameters.targetPointPX[1] = size[1] / 2; // Recenter the target point in the canvas
        }
      }
    },
    [aladin]
  );

  // Listen for zoom changes which indicates a resize
  useAladinEvent("zoom.changed", handleResize);

  // Create the sketch only once
  useEffect(() => {
    if (!aladin) return;

    const size = aladin.getSize();
    p5Instance.current = new P5((p) => {
      p.setup = () => {
        // Create the canvas with the same size as the aladin image
        p.createCanvas(size[0], size[1]);
        parameters.targetPointPX[0] = size[0] / 2; // Center the target point in the canvas
        parameters.targetPointPX[1] = size[1] / 2; // Center the target point in the canvas
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
        parameters.fov = aladin.getFov();
        pointSearcherRef.current = new PointSearcher(p, aladin);
        // pointSearcherRef.current.makeSubset([186.46515, 7.15508], 0.025); // TDOD: Make these variables that get updated in the setup loop
        // Get the initial points from the point searcher on first load
        // pointSearcherRef.current.getPoints(); // TODO: Figure out what arguments to pass in
        samplePlayerRef.current = new SamplePlayer(aladin);
        // Initialize the synth after audio context is available
        synthRef.current = new PixelSynth();
        // Mark P5 as ready after setup is complete
        setIsP5Ready(true);
      };

      p.draw = () => {
        p.clear(); // Clear the canvas before drawing the empty circle and star to avoid ghosting
        // Update the current RA/Dec from Aladin
        parameters.currentRaDec = aladin.getRaDec();
        // Update the FOV from Aladin
        parameters.fov = aladin.getFov();
        // Update the FOV and subset every 60 frames (1 second) TODO: Change when this gets updated to distance instead of time?
        if (p.frameCount % 60 === 0) {
          pointSearcherRef.current.updateFOVAndSubset();
        }
        // Update FOV Radius and Query Radios
        pointSearcherRef.current.updateFOVRadius();
        // Check if we need to update points based on position or FOV changes
        pointSearcherRef.current.shouldUpdatePoints();
        // Update neighbors based on current position and target radius
        pointSearcherRef.current.updateNeighbors();
        // Update and draw animations for points entering the circle
        pointSearcherRef.current.updateAndDrawAnimations();
        // Trigger sounds for points entering the circle
        samplePlayerRef.current.triggerNewNearestNeighbors(
          pointSearcherRef.current
        );

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
      setIsP5Ready(false);
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
