const Door = require('./models/door.js');

const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  // Grabbing buttons from HTML:
  const doorOneBtn = document.querySelector('#door-one');
  const doorTwoBtn = document.querySelector('#door-two');
  const doorThreeBtn = document.querySelector('#door-three');
  const hostOpenDoor = document.querySelector('#host');
  const playerSwitchDoor = document.querySelector('#switch');
  const revealPrize = document.querySelector('#reveal-prize');
  const startNewGame = document.querySelector('#start-new-game');

  let doorColor = "#c4c3bc";
  context.fillStyle = doorColor;
  let randomNumber = Math.round(Math.random());

  const fillRect = function (coords) {
    context.fillRect(coords.x, coords.y, coords.width, coords.height);
  };

  const door1 = new Door({
    "color":  doorColor,
    "coords": {
      x: 75,
      y: 125,
      width: 200,
      height: 350
    },
    "prize": false,
    "isPlayer": false,
    "isHost": false
  });

  const door2 = new Door({
    "color":  doorColor,
    "coords": {
      x: 325,
      y: 125,
      width: 200,
      height: 350
    },
    "prize": false,
    "isPlayer": false,
    "isHost": false
  });

  const door3 = new Door({
    "color":  doorColor,
    "coords": {
      x: 575,
      y: 125,
      width: 200,
      height: 350
    },
    "prize": false,
    "isPlayer": false,
    "isHost": false
  });

  let doors = [door1, door2, door3];

  doors.forEach(function(door) {
    fillRect(door.coords);
    if(door.number === randomNumber) {
    }
  });


  doorOneBtn.addEventListener('click', function() {
    doors[0].isPlayer = true;
    handleDoorButtonClick(doors[0]);
  });


  doorTwoBtn.addEventListener('click', function() {
    doors[1].isPlayer = true;
    handleDoorButtonClick(doors[1]);
  });


  doorThreeBtn.addEventListener('click', function () {
    doors[2].isPlayer = true;
    handleDoorButtonClick(doors[2]);
  });


const handleDoorButtonClick = function(door) {
  if(door.isPlayer) {
  context.beginPath();
  context.moveTo(door.coords.x + 10, door.coords.y + 10);
  context.lineTo(door.coords.x + 20, door.coords.y + 20);
  context.lineTo(door.coords.x + 30, door.coords.y);
  context.strokeStyle = "green";
  context.lineWidth = 5;
  context.stroke();
}else{
  doorColor = "#c4c3bc";
  context.fillStyle = doorColor;
  fillRect(door.coords);
}

  hidePickDoorButtons();
  hostOpenDoor.setAttribute("style", "display: inline-block");


}

  // Host open door

  hostOpenDoor.addEventListener('click', function() {
      revealPrize.style.display = "inline-block";
      playerSwitchDoor.style.display = "inline-block";
      const doorsWithoutPlayer = doors.filter(function (door) {
        return !door.isPlayer;
      });

      const hostDoor = doorsWithoutPlayer[Math.round(Math.random())];
      context.fillStyle = "#cecba9";
      fillRect(hostDoor.coords);
      hostDoor.isHost = true;

      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      });
      const prizeDoor = doorsWithoutHost[Math.round(Math.random())];
      prizeDoor.prize = true;


      this.style.display = "none";
  });



  const hidePickDoorButtons = function() {
    doorOneBtn.setAttribute("style","display: none");
    doorTwoBtn.setAttribute("style","display: none");
    doorThreeBtn.setAttribute("style","display: none");
  }


    playerSwitchDoor.addEventListener('click', function() {
      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      });
      doorsWithoutHost.forEach(function(door){
          door.isPlayer = !door.isPlayer;
          handleDoorButtonClick(door);
      });
      playerSwitchDoor.setAttribute("style", "display: none");
      hostOpenDoor.setAttribute("style", "display: none");
    });


    revealPrize.addEventListener('click', function() {
      startNewGame.style.display = "inline-block";
      playerSwitchDoor.style.display = "none";
      revealPrize.style.display = "none";
      doors.forEach(function(door) {
          if (!door.prize) return;
          doorColor = "pink";
          context.fillStyle = doorColor;
          fillRect(door.coords);
      });
    });

    const resetDoors = function(doors, coords) {
      let doorColor = "#c4c3bc";
      doors.forEach(function(door) {
        context.fillStyle = doorColor;
        fillRect(door.coords);
        door.isPlayer = false;
        door.prize = false;
        door.isHost = false;
      });
    }


    startNewGame.addEventListener('click', function() {
        resetDoors(doors);
        startNewGame.style.display = "none";
        doorOneBtn.style.display = "inline-block";
        doorTwoBtn.style.display = "inline-block";
        doorThreeBtn.style.display = "inline-block";
        revealPrize.style.display = "none";
    });
  // end of app()
}

document.addEventListener('DOMContentLoaded', app);
