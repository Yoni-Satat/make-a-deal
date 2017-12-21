// on load, one door prize = true

const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  let doorColor = "#c4c3bc";
  context.fillStyle = doorColor;
  let randomNumber = Math.round(Math.random());

  const fillRect = function (coords) {
    context.fillRect(coords.x, coords.y, coords.width, coords.height);
  };

  let door1 = [75,125,200,350];
  let door2 = [325,125,200,350];
  let door3 = [575,125,200,350];

  let doors = [
    {
      "color":  doorColor,
      "coords": {
        x: 75,
        y: 125,
        width: 200,
        height: 350
      },
      "number": 1,
      "prize": false,
      "isPlayer": false,
      "isHost": false
    },
    {
      "color":  doorColor,
      "coords": {
        x: 325,
        y: 125,
        width: 200,
        height: 350
      },
      "number": 2,
      "prize": false,
      "isPlayer": false,
      "isHost": false
    },
    {
      "color":  doorColor,
      "coords": {
        x: 575,
        y: 125,
        width: 200,
        height: 350
      },
      "number": 3,
      "prize": false,
      "isPlayer": false,
      "isHost": false
    }
  ]

  doors.forEach(function(door) {
    fillRect(door.coords);
    if(door.number === randomNumber) {
    }
  });

  const pickDoor1 = document.querySelector('#door-one');
  pickDoor1.addEventListener('click', function() {
    context.beginPath();
    context.moveTo(75,125);
    context.lineTo(85,135);
    context.lineTo(95,115);
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.stroke();
    hidePickDoorButtons();
    hostOpenDoor.setAttribute("style", "display: inline-block");
    doors[0].isPlayer = true;
  });

  const door2Button = document.querySelector('#door-two');
  door2Button.addEventListener('click', function() {
    context.beginPath();
    context.moveTo(325,125);
    context.lineTo(335,135);
    context.lineTo(345,115);
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.stroke();
    hidePickDoorButtons();
    hostOpenDoor.setAttribute("style", "display: inline-block");
    doors[1].isPlayer = true;
  });

  const door3Button = document.querySelector('#door-three');
  door3Button.addEventListener('click', function () {
    handleDoorButtonClick(doors[2]);
  });


const handleDoorButtonClick = function(door) {
  context.beginPath();
  context.moveTo(575,125);
  context.lineTo(585,135);
  context.lineTo(595,115);
  context.strokeStyle = "green";
  context.lineWidth = 5;
  context.stroke();
  hidePickDoorButtons();
  hostOpenDoor.setAttribute("style", "display: inline-block");
  door.isPlayer = true;
  console.log(doors);
}

  // Host open door
  const hostOpenDoor = document.querySelector('#host');
  hostOpenDoor.addEventListener('click', function() {

    // let randomNumber = Math.floor(Math.random() * 3) + 1;

      const doorsWithoutPlayer = doors.filter(function (door) {
        return !door.isPlayer;
      })

      const hostDoor = doorsWithoutPlayer[Math.round(Math.random())];
      context.fillStyle = "#cecba9";
      fillRect(hostDoor.coords);
      hostDoor.isHost = true;

      const doorsWithoutHost = doors.filter(function (door) {
        return !door.isHost;
      })
      const prizeDoor = doorsWithoutHost[Math.round(Math.random())];
      prizeDoor.prize = true;

      console.log(doors);
  });

  const hidePickDoorButtons = function() {
    let doorOneBtn = document.querySelector('#door-one');
    doorOneBtn.setAttribute("style","display: none");

    let doorTwoBtn = document.querySelector('#door-two');
    doorTwoBtn.setAttribute("style","display: none");

    let doorThreeBtn = document.querySelector('#door-three');
    doorThreeBtn.setAttribute("style","display: none");

  }




  console.log(doors);
  // end of app()
}

document.addEventListener('DOMContentLoaded', app);
