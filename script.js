const cloud = document.getElementById("cloud");
var waterLevel = document.getElementById("waterLevel");

function randomLeftPosition() {
  // Gerate a random rounded number between 1 to 10;
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

function randomDelay() {
  // Gerate a random rounded number between 1 to 10;
  var randomDelay = Math.random();
  return randomDelay;
}


function waterLevelRise() {
  var waterLevel = document.getElementById("waterLevel");
  waterLevel.classList.remove("drain");
  waterLevel.classList.remove("stopped");
  waterLevel.classList.add("rising");
}


function makeItRain() {
  //Create 100 unique raindrops
  for (let i=1; i<100; i++) {
    // Give each drop a name
    raindropname = "raindrop"+i;
    //get the source drop
    var raindropSource = document.querySelector('#rainDrop0');
    // Create a copy of it
    var cloneDrop = raindropSource.cloneNode(true);
    //Update the ID and add class
    cloneDrop.id = raindropname;
    cloneDrop.classList.add('falling');
    cloneDrop.classList.remove("hidden");
    cloneDrop.classList.remove("stopped");
    cloneDrop.classList.add('raindrop');
    // Add random "left" attribute position
    cloneDrop.style.left = randomLeftPosition()+"%";
    delayValue = randomDelay()+"s"; 
    cloneDrop.style.animationDelay = delayValue;
    raindropSource.after(cloneDrop);

  }
  // Water level rise start
  waterLevelRise();
}

// Need to rewrite this. Needs to be based around modifying css classes to end the infinite looping animation
function rainStop() {
  const raindrops = document.querySelectorAll('.raindrop');
  const waterLevel = document.getElementById('waterLevel');

  raindrops.forEach(raindrop => {
  //Need to remove animated css class and add a paused class
  raindrop.classList.remove("rising");
  raindrop.classList.add("hidden");
  raindrop.classList.add("stopped");
  waterLevel.classList.remove("drain");
  waterLevel.classList.add("stopped");

  });
}

function drain() {
  var waterLevel = document.getElementById("waterLevel");
  waterLevel.classList.remove("stopped");
  waterLevel.classList.remove("rising");
  waterLevel.classList.add("drain");
}