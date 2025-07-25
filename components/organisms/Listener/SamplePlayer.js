import { linearMap } from "./utilities";
import parameters from "./parameters";

const noteNames = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const pointTypeToInstrument = {
  s: "glock",
  g: "harp",
};
function midi2note(midi) {
  const octave = (midi - 6) / 12 - 1;
  const noteIndex = midi % 12;
  const noteName = noteNames[noteIndex];
  return noteName + Math.round(octave);
}

class SamplePlayer {
  constructor(aladin) {
    this.aladin = aladin; // Reference to the Aladin instance
    this.amp_scale = 1;
    this.last_sample_index = -1;
    this.last_midi_note = -1;

    this.setHarmony("major pentatonic");
  }

  setHarmony(harmony) {
    switch (harmony) {
      case "major":
        this.midiNumbers = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23];
        break;
      case "minor":
        this.midiNumbers = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22];
        break;
      case "major pentatonic":
        this.midiNumbers = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];
        break;
      case "minor pentatonic":
        this.midiNumbers = [0, 3, 5, 7, 0, 12, 15, 17, 19, 22];
        break;
      case "whole tone":
        this.midiNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
        break;
      case "diminished":
        this.midiNumbers = [
          0, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23,
        ];
        break;
      case "chromatic":
        this.midiNumbers = Array.from({ length: 24 }, (_, i) => i);
        break;
      case "lydian":
        this.midiNumbers = [0, 2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23];
        break;
      case "mixolydian":
        this.midiNumbers = [0, 2, 4, 5, 7, 9, 10, 12, 14, 16, 17, 19, 21, 22];
        break;
      case "byzantine":
        this.midiNumbers = [0, 1, 4, 5, 7, 8, 11, 12, 13, 16, 17, 19, 20, 23];
        break;
      case "asavari": // 1, b2, 4, 5, b6
        this.midiNumbers = [0, 1, 5, 7, 8, 12, 13, 17, 19, 20, 24];
        break;
      case "hijaz": // 1, b2, 3, 4, 5, b6, b7
        this.midiNumbers = [0, 1, 4, 5, 7, 8, 10, 12, 13, 16, 17, 19, 20, 22];
        break;
      case "egyptian": // 1, 2, 4, 5, b7
        this.midiNumbers = [0, 2, 5, 7, 10, 12, 14, 17, 19, 22, 24];
        break;
    }
    this.midiNumbers = this.midiNumbers.map(
      (number) => number + parameters.startNote - 12
    );
  }

  playSample(pitchValue, volValue, instrument, pan = 0) {
    const midiNoteIndex = Math.floor(
      linearMap(pitchValue, 0, 1, 0, this.midiNumbers.length - 1)
    ); // map the star's size to an index in the midiNumbers array
    const midiNote = this.midiNumbers[midiNoteIndex];
    const sampleIndex = midiNote - parameters.midiMin;

    if (midiNote >= parameters.midiMin && midiNote < parameters.midiMax) {
      // using web audio api
      this.playAudio(`${instrument}_${midiNote}`, volValue, pan);
    }
    this.last_sample_index = sampleIndex;
    this.last_midi_note = midiNote;
  }

  triggerPoints(points) {
    if (points && points.length > 0) {
      for (const point of points) {
        const pointPX = this.aladin.world2pix(point.point[0], point.point[1]);
        const pointFreqData = linearMap(
          point.gRColor,
          parameters.minGRColour,
          parameters.maxGRColour,
          0,
          1,
          true
        ); // Map br color to frequency
        let pointAmplitude = linearMap(
          point.gmag,
          parameters.gmagMax,
          parameters.gmagMin,
          0,
          1,
          true
        ); // Map size to amplitude
        if (point.flag === "s") {
          pointAmplitude *= 0.1; // Scale down amplitude for stars
        }
        const instrument = pointTypeToInstrument[point.flag] || "harp"; // Default to 'harp' if type is not found
        let pan = 0;
        const distanceFromTarget = pointPX[0] - parameters.targetPointPX[0];
        pan = linearMap(
          distanceFromTarget,
          -parameters.targetRadiusPX,
          parameters.targetRadiusPX,
          -1,
          1,
          true
        );
        pan = Math.min(Math.max(pan, -1), 1); // Ensure pan stays within the valid range
        this.playSample(
          pointFreqData ** parameters.freqScaling,
          0.025 +
            parameters.maxSampleVolume *
              pointAmplitude ** parameters.ampScaling,
          instrument,
          pan
        ); // Play the sample with the mapped values
      }
    }
  }

  triggerNewNearestNeighbors(pointSearcher) {
    if (
      pointSearcher.newNearestNeighbours &&
      pointSearcher.newNearestNeighbours.length > 0
    ) {
      const pointsToTrigger = pointSearcher.newNearestNeighbours.slice(0, 8); // Limit to at most 8 points
      this.triggerPoints(pointsToTrigger);
    }
  }

  playAudio(name, volume = 1.0, pan = 0.0) {
    if (parameters.audioBuffers[name]) {
      const source = parameters.audioContext.createBufferSource();
      const gainNode = parameters.audioContext.createGain(); // Create a GainNode for volume control
      const pannerNode = parameters.audioContext.createStereoPanner(); // Create a StereoPannerNode for panning

      source.buffer = parameters.audioBuffers[name];
      source.connect(gainNode); // Connect the source to the GainNode
      gainNode.connect(pannerNode); // Connect the GainNode to the PannerNode
      pannerNode.connect(parameters.audioContext.destination); // Connect the PannerNode to the destination

      gainNode.gain.value = volume; // Set the volume (0.0 to 1.0)
      pannerNode.pan.value = pan; // Set the pan (-1.0 for full left, 1.0 for full right)

      source.start(0);
    }
  }
}

export default SamplePlayer;
