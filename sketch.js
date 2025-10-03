let kermit;
let gif;
let lastShakeTime = 0; // Tracks the last time the phone was shaken
let gifPlaying = false; // Tracks whether the GIF is currently playing

function preload() {
  kermit = loadImage('assets/kermit.jpg');
}

function setup() {
  createCanvas(1920, 1080);

  // Load the GIF and hide it initially
  gif = createImg('assets/snowfall.gif');
  gif.size(1920, 1080);
  gif.position(0, 0);
  gif.hide(); // Hide the GIF initially
}

function draw() {
  background(255); 
  image(kermit, 0, 0); 

  // Check if 5 seconds have passed since the last shake
  if (gifPlaying && millis() - lastShakeTime > 5000) {
    gif.hide(); 
    gifPlaying = false; 
  }
}

// Triggered when the phone is shaken
function deviceShaken() {
  lastShakeTime = millis(); 

  if (!gifPlaying) {
    gif.show(); 
    gifPlaying = true; 
  }
}