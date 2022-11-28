"use strict";

var sapa = require("./libs/sapa");
var convert = require("./libs/convert");
var _require = require("./libs/filterData"),
  filterData = _require.filterData,
  data = _require.data;
var checkScore = require("./libs/checkScore");
var command = process.argv[2];
var myArgs = process.argv[3];
switch (command) {
  case "sapa":
    if (myArgs != undefined) {
      console.log(sapa(myArgs));
    } else {
      console.log("-Try: node dist sapa nama");
    }
    break;
  case "convert":
    if (myArgs != undefined) {
      console.log(convert(myArgs, process.argv[4], process.argv[5]));
    } else {
      console.log("-Try: node dist convert nama domisili umur");
    }
    break;
  case "checkScore":
    if (myArgs != undefined) {
      console.log(checkScore(myArgs));
    } else {
      console.log("-Try: node dist checkScore name:Ahmad,kelas:Adonis,score:89");
    }
    break;
  case "filterData":
    if (myArgs != undefined) {
      console.log(filterData(data, myArgs));
    } else {
      console.log("-Try: node dist filterData kelas");
    }
    break;
}