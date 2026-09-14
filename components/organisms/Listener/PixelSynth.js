import { rgbToHue, mapHueToRange, linearMap } from "./utilities";
import parameters from "./parameters";

class PixelSynth {
  constructor() {
    // Use shared audio context instead of creating our own
    this.audioContext = null;
    this.start_note = 60;
    this.setHarmony("major pentatonic");
    this.noteFrequencies = this.midiNumbers.map(midiToFrequency);
    this.oscillator = null;
    this.oscillatorGainNode = null;
    this.reverbNode = null;
    this.reverbGainNode = null;
    this.dryGainNode = null; // New gain node for dry signal
    this.masterGainNode = null; // New master gain node
    this.limiterNode = null; // New limiter node
    this.frequencyScale = 1;
    this.amplitudeScale = 1.5;
    // Don't call setupReverb here - audio context isn't available yet
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
        this.midiNumbers = [0, 3, 5, 7, 10, 12, 15, 17, 19, 22];
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
      (number) => number + this.start_note - 12
    );
  }

  async setupReverb() {
    // Use shared audio context from parameters
    this.audioContext = parameters.audioContext;

    // Create impulse response for reverb
    const sampleRate = this.audioContext.sampleRate;
    const length = sampleRate * 2; // 2 seconds of reverb
    const impulse = this.audioContext.createBuffer(2, length, sampleRate);

    for (let channel = 0; channel < 2; channel++) {
      const channelData = impulse.getChannelData(channel);
      for (let i = 0; i < length; i++) {
        // Exponential decay
        channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
      }
    }

    // Create and setup convolver
    this.reverbNode = this.audioContext.createConvolver();
    this.reverbNode.buffer = impulse;

    // Create reverb gain
    this.reverbGainNode = this.audioContext.createGain();
    this.reverbGainNode.gain.value = 0.9; // Adjust reverb mix
  }

  playNote(rgbValues) {
    // Use shared audio context from parameters
    this.audioContext = parameters.audioContext;

    // Setup reverb if not already done
    if (!this.reverbNode) {
      this.setupReverb();
    }

    // Create new oscillator if one doesn't exist
    if (!this.oscillator) {
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.disconnect();
      this.oscillator.type = "sine";

      // Create gain nodes
      this.oscillatorGainNode = this.audioContext.createGain();
      this.oscillatorGainNode.gain.setValueAtTime(
        0,
        this.audioContext.currentTime
      );

      this.dryGainNode = this.audioContext.createGain();
      this.dryGainNode.gain.value = 0.3; // Dry signal level

      // Create master gain
      this.masterGainNode = this.audioContext.createGain();
      this.masterGainNode.gain.value = 1.0; // Master volume control - values above ~20-30 may not provide additional volume

      // Create limiter to prevent clipping
      this.limiterNode = this.audioContext.createDynamicsCompressor();
      this.limiterNode.threshold.value = -1;
      this.limiterNode.knee.value = 0;
      this.limiterNode.ratio.value = 20;
      this.limiterNode.attack.value = 0;
      this.limiterNode.release.value = 0.25;

      // Connect nodes with reverb
      this.oscillator.connect(this.oscillatorGainNode);

      // Split into dry and wet paths
      this.oscillatorGainNode.connect(this.dryGainNode);
      this.oscillatorGainNode.connect(this.reverbNode);

      // Connect to output through master gain and limiter
      this.dryGainNode.connect(this.masterGainNode);
      this.reverbNode.connect(this.reverbGainNode);
      this.reverbGainNode.connect(this.masterGainNode);
      this.masterGainNode.connect(this.limiterNode);
      this.limiterNode.connect(this.audioContext.destination);

      this.start();
    }

    const brightness = (rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3; // Calculate brightness as the average of r, g, b
    const hue = rgbToHue(rgbValues[0], rgbValues[1], rgbValues[2]); // Calculate hue from RGB values
    // console.log(hue);
    const freqData = mapHueToRange(hue, parameters.hue_offset); // Map hue to a range of 0 to 1, with offset
    const amplitude = linearMap(brightness, 0, 255, 0, 1); // Map brightness to a range of 0 to 1
    // let amplitude = 1;

    this.updateOscillator(freqData, 1 * amplitude ** this.amplitudeScale);
  }

  updateOscillator(freqData, amplitude) {
    this.setFrequency(freqData);
    this.setAmplitude(amplitude);
  }

  setFrequency(freqData) {
    let noteIndex = Math.floor(
      linearMap(
        freqData ** this.frequencyScale,
        0,
        1,
        0,
        this.noteFrequencies.length
      )
    ); // Map to note pitches
    noteIndex = Math.max(
      0,
      Math.min(noteIndex, this.noteFrequencies.length - 1)
    ); // Ensure the index is within bounds
    const frequency = this.noteFrequencies[noteIndex]; // Get the corresponding frequency

    this.oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );
  }

  setAmplitude(amp) {
    if (this.oscillatorGainNode) {
      const offset = 0; // trying to make dark regions quiet
      const ampCon = Math.min(Math.max(amp - offset, 0), 0.8); // constrain between 0 and 0.8
      // Use setTargetAtTime for smooth transitions
      // The last parameter (0.3) controls how fast the transition happens - lower values = smoother but slower
      this.oscillatorGainNode.gain.setTargetAtTime(
        ampCon,
        this.audioContext.currentTime,
        1
      );
    }
  }

  start() {
    if (this.oscillator && this.oscillator.state !== "running") {
      this.oscillator.start();
    }
  }
}

function midiToFrequency(midiNumber) {
  const A4 = 440; // Frequency of A4
  return A4 * Math.pow(2, (midiNumber - 69) / 12);
}

export default PixelSynth;
