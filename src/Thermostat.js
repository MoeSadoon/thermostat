function Thermostat() {
  this.temperature = 20
  this.powerModeON = true
};

Thermostat.prototype.tempUp = function(num) {
  this.temperature += num;
  if(this.powerModeON && this.temperature > 25){
    this.temperature = 25;
  }
  else if (!this.powerModeON && this.temperature > 32) {
    this.temperature = 32;
  }
};

Thermostat.prototype.tempDown = function(num) {
  this.temperature -= num;
  if(this.temperature < 10){
    this.temperature = 10;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.switchPowermodeOff = function() {
  this.powerModeON = false;
};
