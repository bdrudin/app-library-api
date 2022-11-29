"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var checkScore = function checkScore(str) {
  var results = str.split(" ");
  var data = [];
  for (var i = 0; i < results.length; i++) {
    var arr = results[i].split(",");
    arr.forEach(function (item) {
      var value = item.split(":");
      data.push(value);
    });
  }
  var obj = {
    name: data[0][1],
    kelas: data[1][1],
    score: data[2][1]
  };
  return obj;
};
var _default = checkScore;
exports["default"] = _default;