const parameters = {
  targetPointPX: [756, 223.5], // Target point for the middle of the screen in pixles [x, y]
  targetRadiusPX: 50, // Radius of the target circle in pixels //TODO: Is hardcoding this okay?
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
  instruments: ["harp", "glock"], // instruemtns with premade samples
  startNote: 60, // Starting MIDI note for the instruments
  audioContext: null, // Reference to the audio context
  audioBuffers: {}, // Object to store multiple audio buffers
  minGRColour: 0, // Minimum green-red color value
  maxGRColour: 0.8, // Maximum green-red color value
  gmagMin: 9, // Minimum gmag value
  gmagMax: 23, // Maximum gmag value
  freqScaling: 0.4, // Frequency scaling factor
  ampScaling: 0.5, // Amplitude scaling factor
  maxSampleVolume: 0.4, // Maximum volume for samples
  // API parameters, need to set with intial values
  currentRaDec: [187.77035, 8.07268], // Current RA and Dec coordinates
  lastRaDec: [0, 0], // Last RA and Dec coordinates at time of API call
  fov: [0, 0], // Field of View in pixels [width, height]
  fovRadius: 0, // Field of View radius in Ra/Dec
  queryFOVFactor: 2, // Factor to multiply FOVRadius. Has to be bigger than 1
  querygmagMin: 15, // Minimum gmag for querying points
  querygmagMax: 22, // Maximum gmag for querying points
  fovLimits: {
    min: 0.02, // Minimum FOV limit
    max: 5, // Maximum FOV limit
  },
  queryRadius: 1.0427847363184868, // Qery radius for API calls
  queryMag: 0, // Query magnitude for API calls
};

export default parameters;

// feed lastRADEC & currentRADEC into raDecDistance(), compare output to FOVRadius-tartgetRadiusRaDec
// if output of raDecDistance() is greater than FOVRadius-tartgetRadiusRaDec, then call API
// create parameter used to multiply the FOVRadius and QueryRadius
