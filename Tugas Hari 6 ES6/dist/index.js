"use strict";

var _sapa = _interopRequireDefault(require("./libs/sapa"));
var _convert = _interopRequireDefault(require("./libs/convert"));
var _filterData = require("./libs/filterData");
var _checkScore = _interopRequireDefault(require("./libs/checkScore"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var command = process.argv[2];
var myArgs = process.argv[3];
switch (command) {
  case "sapa":
    if (myArgs != undefined) {
      console.log((0, _sapa["default"])(myArgs));
    } else {
      console.log("-Try: node dist sapa nama");
    }
    break;
  case "convert":
    if (myArgs != undefined) {
      console.log((0, _convert["default"])(myArgs, process.argv[4], process.argv[5]));
    } else {
      console.log("-Try: node dist convert nama domisili umur");
    }
    break;
  case "checkScore":
    if (myArgs != undefined) {
      console.log((0, _checkScore["default"])(myArgs));
    } else {
      console.log("-Try: node dist checkScore name:Ahmad,kelas:Adonis,score:89");
    }
    break;
  case "filterData":
    if (myArgs != undefined) {
      console.log((0, _filterData.filterData)(_filterData.data, myArgs));
    } else {
      console.log("-Try: node dist filterData kelas");
    }
    break;
}