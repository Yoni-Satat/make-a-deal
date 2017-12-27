/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Door = __webpack_require__(1);
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
        // context.beginPath();
        // context.moveTo(door.coords.x + 10, door.coords.y + 10);
        // context.lineTo(door.coords.x + 20, door.coords.y + 20);
        // context.lineTo(door.coords.x + 30, door.coords.y);
        // context.strokeStyle = "green";
        // context.lineWidth = 5;
        // context.stroke();
        context.font = "26px Comic Sans MS";
        context.fillStyle = "#ff0000";
        context.fillText("IT'S MINE!", door.coords.x + 25, door.coords.y + 45);
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
      drawGoat(hostDoor.coords.x + 10, hostDoor.coords.y + 140);

      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      });
      const prizeDoor = doorsWithoutHost[Math.round(Math.random())];
      prizeDoor.prize = true;
      this.disabled = true;
  });



  const hidePickDoorButtons = function() {
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
      // startNewGame.disabled = false;
      playerSwitchDoor.disabled = true;
      revealPrize.style.disabled = true;
      doors.forEach(function(door) {
          context.fillStyle = "#ffffff";
          fillRect(door.coords);
          if (!door.prize) {
            drawGoat(door.coords.x + 10, door.coords.y + 140);
          } else if (door.prize) {
            drawPrize(door.coords.x + 15, door.coords.y + 140);
            console.log(doors);
          } if (door.isPlayer) {
            markDoorPlayer();
          }
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
        // startNewGame.disabled = true;
        doorOneBtn.disabled = false;
        doorTwoBtn.disabled = false;
        doorThreeBtn.disabled = false;
        revealPrize.disabled = true;
        hostOpenDoor.disabled = true;
        playerSwitchDoor.disabled = true;
    });
  // end of app()
}

document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const Door = function(options) {
  this.color = options.color;
  this.coords = options.coords;
  this.prize = options.prize;
  this.isPlayer = options.isPlayer;
  this.isHost = options.isHost;
}

module.exports = Door;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map