const Door = function(options) {
  this.color = options.color;
  this.coords = options.coords;
  this.prize = options.prize;
  this.isPlayer = options.isPlayer;
  this.isHost = options.isHost;
}

module.exports = Door;
