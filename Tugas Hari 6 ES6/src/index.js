const sapa = require("./libs/sapa");
const convert = require("./libs/convert");
const { filterData, data } = require("./libs/filterData");
const checkScore = require("./libs/checkScore");

const command = process.argv[2];
const myArgs = process.argv[3];

switch (command) {
  case "sapa":
    if (myArgs != undefined) {
      console.log(sapa(myArgs));
    } else {
      console.log(`-Try: node dist sapa nama`);
    }
    break;
  case "convert":
    if (myArgs != undefined) {
      console.log(convert(myArgs, process.argv[4], process.argv[5]));
    } else {
      console.log(`-Try: node dist convert nama domisili umur`);
    }
    break;
  case "checkScore":
    if (myArgs != undefined) {
      console.log(checkScore(myArgs));
    } else {
      console.log(
        `-Try: node dist checkScore name:Ahmad,kelas:Adonis,score:89`
      );
    }
    break;
  case "filterData":
    if (myArgs != undefined) {
      console.log(filterData(data, myArgs));
    } else {
      console.log(`-Try: node dist filterData kelas`);
    }
    break;
}
