const Door = require('./models/door.js');
// const buttonView = require('./views/button_view.js')
// const canvasView = require('./views/canvas_view.js')

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
  const imageGoat = document.createElement('img');
  imageGoat.src = "http://cartoon-animals.disneyandcartoons.com/_/rsrc/1472859114630/funny-goat-images/funny%20cartoon%20pink%20goat.png?height=400&width=400";
  const imagePrize = document.createElement('img');
  imagePrize.src = "http://www.pngall.com/wp-content/uploads/2016/04/Winner-PNG-File.png";

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
      y: 40,
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
      y: 40,
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
      y: 40,
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
  });

  const drawGoat = function(x, y) {
    context.drawImage(imageGoat, x, y, 170, 170);
  }
  imageGoat.addEventListener('load', drawGoat);

  const drawPrize = function(x, y) {
    context.drawImage(imagePrize, x, y, 170, 170);
  }
  imageGoat.addEventListener('load', drawPrize);


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

  const markDoorPlayer = function() {
    doors.forEach(function(door) {
      if (door.isPlayer) {
        context.beginPath();
        context.moveTo(door.coords.x + 10, door.coords.y + 10);
        context.lineTo(door.coords.x + 20, door.coords.y + 20);
        context.lineTo(door.coords.x + 30, door.coords.y);
        context.strokeStyle = "green";
        context.lineWidth = 5;
        context.stroke();
      }
    });
  }


const handleDoorButtonClick = function(door) {
  if(door.isPlayer) {
    markDoorPlayer();
  }else{
    doorColor = "#c4c3bc";
    context.fillStyle = doorColor;
    fillRect(door.coords);
  }
    hidePickDoorButtons();
    hostOpenDoor.disabled = false;
}

  // Host open door

  hostOpenDoor.addEventListener('click', function() {
      revealPrize.disabled = false;
      playerSwitchDoor.disabled = false;
      const doorsWithoutPlayer = doors.filter(function (door) {
        return !door.isPlayer;
      });

      const hostDoor = doorsWithoutPlayer[Math.round(Math.random())];
      context.fillStyle = "#ffffff";
      fillRect(hostDoor.coords);
      hostDoor.isHost = true;
      drawGoat(hostDoor.coords.x + 15, hostDoor.coords.y + 140);

      // context.font = "30px Comic Sans MS";
      // context.fillStyle = "red";
      // context.fillText("Nothing Here", hostDoor.coords.x + 5, hostDoor.coords.y + 180);

      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      });
      const prizeDoor = doorsWithoutHost[Math.round(Math.random())];
      prizeDoor.prize = true;
      this.disabled = true;
  });



  const hidePickDoorButtons = function() {
    // doorOneBtn.setAttribute("style","display: none");
    // doorTwoBtn.setAttribute("style","display: none");
    // doorThreeBtn.setAttribute("style","display: none");
    doorOneBtn.disabled = true;
    doorTwoBtn.disabled = true;
    doorThreeBtn.disabled = true;
  }


    playerSwitchDoor.addEventListener('click', function() {
      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      });
      doorsWithoutHost.forEach(function(door){
          door.isPlayer = !door.isPlayer;
          handleDoorButtonClick(door);
      });
      playerSwitchDoor.disabled = true;
      hostOpenDoor.disabled = true;
    });


    revealPrize.addEventListener('click', function() {
      startNewGame.disabled = false;
      playerSwitchDoor.disabled = true;
      revealPrize.style.disabled = true;
      doors.forEach(function(door) {
          // if (!door.prize) return;
          context.fillStyle = "#ffffff";
          fillRect(door.coords);
          drawGoat(door.coords.x + 15, door.coords.y + 140);

          if (!door.prize) return;

          drawPrize(door.coords.x + 15, door.coords.y + 140);
          markDoorPlayer();
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
        startNewGame.disabled = true;
        doorOneBtn.disabled = false;
        doorTwoBtn.disabled = false;
        doorThreeBtn.disabled = false;
        revealPrize.disabled = true;
        // please refactor to:
        // startNewGame.classList.remove('.visible-button');
        // startNewGame.classList.add('.hidden-button');
    });
  // end of app()
}

document.addEventListener('DOMContentLoaded', app);
