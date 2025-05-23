Here's an overview of how the sonification app works and how we've structured it.

We've used the Listener folder you had already made and put all of our JavaScript files in there. We're loading our sketch as a component of the Listener. The Listener is loaded in the listen page.

We also have a SonificationControls component that also gets loaded in the listen page.

Quick overview of the files.

Listener/index: We've mostly left this the same as you had it, where it's grabbing the pixel value from Aladin. We just changed it so it returns an array and added a weighting function.

Listener/sketch: This is where we're making the p5 canvas. P5 has two main functions in it, a setup loop that happens with it's first loaded and a draw loop that runs every frame.

Listener/utilities: This holds different methods we use throught the app.

Listener/parameters: This is where we keepign most of the variable we're using.

Listener/PixelSynth: This is the synth class where we make and play the synthesizer.

Let us know if there's another way you would like us to organize everything so it fits in better with the architecture you already have.