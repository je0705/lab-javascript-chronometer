// Constructor
function Chronometer() {

  this.currentTime = 0;
  this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {
  var that = this;
  this.intervallId = setInterval(function (){
    that.setTime();
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
    value = "0" + value;      // "00"
  } else if (value < 10){
    value = "0" + value;      // "01"
  } else value = "" + value;
  return value;               // 2
};

Chronometer.prototype.setTime = function () {
  var seconds = this.setSeconds(this.currentTime);
  var minutes = this. setMinutes(this.currentTime);

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {

  clearInterval(this.intervalId);
  
};

Chronometer.prototype.resetClick = function () {

  this.currentTime = 0;

};

// Chronometer.prototype.splitClick = function () {

// };

var chrono = new Chronometer;
// chrono.startClick();
// chrono.setSeconds();
// chrono.setMinutes();
// chrono.twoDigitsNumber(); 