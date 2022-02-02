export default class CurrentLocation {
  constructor() {
    this._name = "Current Location";
    this._lat = null;
    this._long = null;
    this._unit = 'imperial';
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getLat() {
    return this._lat;
  }

  setLat(lat) {
    this._lat = lat;
  }

  getLong() {
    return this._long;
  }

  setLong(long) {
    this._long = long;
  }

  getUnit() {
    return this._unit;
  }

  setUnit(unit) {
    this._unit = unit;

  toggleUnit() {
    this._unit = this._unit === 'imperial' ? 'metric' : 'imperial';
  }  
  }
}