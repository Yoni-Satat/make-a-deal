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

const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
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

  const pickDoor1 = document.querySelector('#door-one');
  pickDoor1.addEventListener('click', function() {
    doors[0].isPlayer = true;
    handleDoorButtonClick(doors[0]);
  });

  const door2Button = document.querySelector('#door-two');
  door2Button.addEventListener('click', function() {
    doors[1].isPlayer = true;
    handleDoorButtonClick(doors[1]);
  });

  const door3Button = document.querySelector('#door-three');
  door3Button.addEventListener('click', function () {
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
  console.log(doors);
}

  // Host open door
  const hostOpenDoor = document.querySelector('#host');
  hostOpenDoor.addEventListener('click', function() {

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

      console.log(doors);
      this.style.display = "none";
  });

  const hidePickDoorButtons = function() {
    let doorOneBtn = document.querySelector('#door-one');
    doorOneBtn.setAttribute("style","display: none");

    let doorTwoBtn = document.querySelector('#door-two');
    doorTwoBtn.setAttribute("style","display: none");

    let doorThreeBtn = document.querySelector('#door-three');
    doorThreeBtn.setAttribute("style","display: none");

  }

    let playerSwitchDoor = document.querySelector('#switch');
    playerSwitchDoor.addEventListener('click', function() {
      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      });
      doorsWithoutHost.forEach(function(door){
          door.isPlayer = !door.isPlayer;
          handleDoorButtonClick(door);
      });




    });




  // console.log(doors);
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