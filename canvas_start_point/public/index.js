// on load, one door prize = true

const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  let doorColor = "#c4c3bc";
  context.fillStyle = doorColor;
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  const fillRect = function (array) {
    const x = array[0];
    const y = array[1];
    const width = array[2];
    const height = array[3];
    context.fillRect(x, y, width, height);
  };

  let door1 = [75,125,200,350];
  let door2 = [325,125,200,350];
  let door3 = [575,125,200,350];

  let doors = [
    {
      "color":  doorColor,
      "shape":  fillRect(door1),
      "coords": [75,125,200,350],
      "number": 1,
      "prize": false,
      "isPlayer": false
    },
    {
      "color":  doorColor,
      "shape":  fillRect(door2),
      "coords": [325,125,200,350],
      "number": 2,
      "prize": false,
      "isPlayer": false
    },
    {
      "color":  doorColor,
      "shape": fillRect(door3),
      "coords": [575,125,200,350],
      "number": 3,
      "prize": false,
      "isPlayer": false
    }
  ]

  doors.forEach(function(door) {
    if(door.number === randomNumber) {
      door.prize = true;
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
    
  });

  const pickDoor2 = document.querySelector('#door-two');
  pickDoor2.addEventListener('click', function() {
    context.beginPath();
    context.moveTo(325,125);
    context.lineTo(335,135);
    context.lineTo(345,115);
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.stroke();
    hidePickDoorButtons();
    hostOpenDoor.setAttribute("style", "display: inline-block");
  });

  const pickDoor3 = document.querySelector('#door-three');
  pickDoor3.addEventListener('click', function() {
    context.beginPath();
    context.moveTo(575,125);
    context.lineTo(585,135);
    context.lineTo(595,115);
    context.strokeStyle = "green";
    context.lineWidth = 5;
    context.stroke();
    hidePickDoorButtons();
    hostOpenDoor.setAttribute("style", "display: inline-block");
  });


  // Host open door
  const hostOpenDoor = document.querySelector('#host');
  hostOpenDoor.addEventListener('click', function() {

    // let randomNumber = Math.floor(Math.random() * 3) + 1;

      doors.forEach(function(door){
        if(door.number === randomNumber) {
          const replacedDoor = {
            "color":  context.fillStyle = "#cecba9",
            "shape":  fillRect(door.coords),
            "number": randomNumber,
            "prize": true
          }
          console.log('replacedDoor');
        }
      });
      // hidePickDoorButtons();
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
