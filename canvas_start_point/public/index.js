

const app = function() {
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  let doorColor = "yellow";
  context.fillStyle = doorColor;

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
      "prize": false
    },
    {
      "color":  doorColor,
      "shape":  fillRect(door2),
      "coords": [325,125,200,350],
      "number": 2,
      "prize": false
    },
    {
      "color":  doorColor,
      "shape": fillRect(door3),
      "coords": [575,125,200,350],
      "number": 3,
      "prize": false
    }
  ]

  const pickDoor = document.querySelector('#door-one');
  pickDoor.addEventListener('click', function() {
    context.beginPath();
    context.moveTo(75,125);
    context.lineTo(85,135);
    context.lineTo(95,115);
    context.strokeStyle = "green";
    context.stroke();
  });


  // Host open door
  const hostOpenDoor = document.querySelector('#host');
  hostOpenDoor.addEventListener('click', function() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

      doors.forEach(function(door){
        if(door.number === randomNumber) {
          const replacedDoor = {
            "color":  context.fillStyle = "red",
            "shape":  fillRect(door.coords),
            "number": randomNumber,
            "prize": false
          }
          console.log('replacedDoor');
        }
      });
  });





  // end of app()
}

document.addEventListener('DOMContentLoaded', app);
