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
    cloneDrop.classList.add('raindrop');
    // Add random "left" attribute position
    cloneDrop.style.left = randomLeftPosition()+"%";
    delayValue = randomDelay()+"s"; 
    cloneDrop.style.animationDelay = delayValue;
    raindropSource.after(cloneDrop);

  }
}

function waterLevelRise() {
  var waterLevel = document.getElementById("waterLevel");
  // One second interval
  var interval = window.setInterval(1000);
  var intervalCount = 0;

  for(var i = 0; i < 590; i++) {
    (function(index) {
        setTimeout(function() {
          currentWaterLevel = waterLevel.clientHeight;
          newWaterLevel = currentWaterLevel+1;
          waterLevel.style.height = newWaterLevel+"px";
        }, index*1000);
    })(i);
  }
      

}

function drain() {

}

makeItRain();
waterLevelRise();