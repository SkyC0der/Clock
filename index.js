class Clock {
  //type code here
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.date = new Date();
  }

  toString() {
    this.date.setHours(this.hours), this.date.setMinutes(this.minutes);
    return String(this.date.toString().match(/\d\d:\d\d/g));
  }

  plus = (mins) => {
    this.minutes += mins;
    return this;
  };

  minus = (mins) => {
    this.minutes -= mins;
    return this;
  };

  equals = (newClock) => this.toString() === newClock.toString();
}

module.exports = Clock;
