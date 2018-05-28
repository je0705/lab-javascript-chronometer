// Constructor
function Chronometer() {

  this.currentTime = 0;
  this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervallId = setInterval(function (){
    that.currentTime++;
  }, 1000)
};

Chronometer.prototype.setMinutes = function () {
  var minutesDec = this.currentTime / 60;
  var minutesRounded = Math.floor(minutesDec);
  return minutesRounded;
  
};

 Chronometer.prototype.setSeconds = function () {
  var secondsLeft = this.currentTime % 60;
  return secondsLeft;
  
};

Chronometer.prototype.twoDigitsNumber = function (value) {
 
  if (value === 0){
    value = "0" + value;
  } else if (value === 1){
    value = "0" + value;
  }
  return value;
};

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

var chrono = new Chronometer;
// chrono.startClick();
// chrono.setSeconds();
// chrono.setMinutes();
// chrono.twoDigitsNumber(); 