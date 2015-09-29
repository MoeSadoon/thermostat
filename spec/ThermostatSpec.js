describe("thermostat", function() {

  it('starts at 20 degrees', function() {
    thermostat = new Thermostat;
    expect(thermostat.temperature).toEqual(20)
  });

  it('can increase temperature', function() {
    thermostat = new Thermostat;
    thermostat.tempUp(3);
    expect(thermostat.temperature).toEqual(23)
  });

  it('can decrease temperature', function() {
    thermostat = new Thermostat;
    thermostat.tempDown(3);
    expect(thermostat.temperature).toEqual(17)
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat = new Thermostat;
    thermostat.tempDown(50);
    expect(thermostat.temperature).toEqual(10)
  });

  it('has power mode switched on by default', function() {
    thermostat = new Thermostat;
    expect(thermostat.powerModeON).toBe(true)
  });

  it('can switch power mode off', function() {
    thermostat = new Thermostat;
    thermostat.switchPowermodeOff();
    expect(thermostat.powerModeON).toBe(false)
  });

  it('cannot have temp higher than 25 when power mode ON',function() {
    thermostat = new Thermostat;
    thermostat.tempUp(50);
    expect(thermostat.temperature).toEqual(25)
  });


  it('cannot have temp higher than 32 when power mode OFF', function() {
    thermostat = new Thermostat;
    thermostat.switchPowermodeOff();
    thermostat.tempUp(50);
    expect(thermostat.temperature).toEqual(32)
  });

  it('resets to 20',function() {
    thermostat = new Thermostat;
    thermostat.tempUp(5);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  });


});
