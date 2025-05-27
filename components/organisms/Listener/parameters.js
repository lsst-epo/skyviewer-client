const parameters = {
  targetRadiusPX: 50, // Radius of the target circle
  minBrightness: 50, // Minimum brightness threshold
  maxBrightness: 1.0, // Maximum brightness threshold
  brightness_boost: 1.2, // Brightness boost factor
  brightness_scaleFactor: 1, // Default scale factor (1 = no scaling)
  isSonificationPlaying: false, // Will be toggled by the SonificationControls/PlayPauseButton
  walkSpeed: 0.5, // Speed for automatic walk
  keyboardSpeed: 0.5, // Speed for keyboard-controlled movement
  noiseOffset: Math.random() * 1000, // Random offset for noise
  noiseScale: 0.001, // Scale for noise
  mouseIsPressed: false, // Tracks whether the mouse is currently pressed
  synth: null, // Reference to the PixelSynth instance
  midiMin: 48, // Minimum MIDI note
  midiMax: 84, // Maximum MIDI note
  start_note: 60, // Starting MIDI note
  hue_offset: 300, // Hue offset for color conversion
  directionX: 1, // Number of pixels to move along the x-axis when using the arrow keys
  directionY: 1, // Number of pixels to move along the y-axis when using the arrow keys
  boundarySetps: 20, // Number of steps to take before checking for boundaries
  instruments: ["harp", "piano", "guitar"], // instruemtns with premade samples
  audioContext: null, // Reference to the audio context
  audioBuffers: {}, // Object to store multiple audio buffers
  minGRColour: 0, // Minimum green-red color value
  maxGRColour: 0.8, // Maximum green-red color value
};

export default parameters;
