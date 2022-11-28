"use strict";

var filterData = function filterData(arr, kelas) {
  var results = arr.filter(function (item) {
    return item["kelas"].toLowerCase().includes(kelas.toLowerCase());
  });
  return results;
};
var data = [{
  name: "Ahmad",
  kelas: "adonis"
}, {
  name: "Regi",
  kelas: "laravel"
}, {
  name: "Bondra",
  kelas: "adonis"
}, {
  name: "Iqbal",
  kelas: "vuejs"
}, {
  name: "Putri",
  kelas: "Laravel"
}];
module.exports = {
  filterData: filterData,
  data: data
};