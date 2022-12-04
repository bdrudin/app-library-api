// Diberikan data table sebagai berikut;
// _______________________________
// | Field-1 | Field-2 | Field-3 |
// |_________|_________|_________|
// | row1	   |    2    |     S   |
// |_________|_________|_________|
// | row2    |    2    |    A    |
// |_________|_________|_________|
// | row3    |    1    |    S    |
// |_________|_________|_________|
// | row4	   |    3    |     S   |
// |_________|_________|_________|
// | row5    |    1    |    A    |
// |_________|_________|_________|
// | row6    |    4    |    A    |
// |_________|_________|_________|
// | row7	   |    5    |     S   |
// |_________|_________|_________|
// | row8    |    5    |    A    |
// |_________|_________|_________|

// Tuliskan code untuk mengkonversikan data table diatas menjadi Associative-Array sebagai berikut;
// [
//   ["row3", "row5"],
//   ["row1", "row2"],
//   ["row4", ""],
//   ["", "row6"],
//   ["row7", "row8"],
// ]

// *Hints :
// i. Convert datatable ke dalam bentuk Array of Object terlebih dahulu sebagai langkah awal.
// ii. Field2 merupakan index number di array output.
// iii. Format output : ["Field1 dengan Field3 = S", "Field1 dengan Field3 = A"]
// iv. Peserta diperbolehkan menggunakan bahasa pemograman apapun (C++, Javascript, PHP, dll)

const convertArr = (arr) => {
  let result = [];
  arr.forEach((item) => {
    const field1 = item.Field1;
    const field2 = item.Field2;
    const field3 = item.Field3;

    for (let i = 0; i < field3.length; i++) {
      // console.log(field3[i]);
      // console.log(field1[i]);
    }

    result.push([field1[2], field1[4]]);
    result.push([field1[0], field1[1]]);
    result.push([field1[3], ""]);
    result.push(["", field1[5]]);
    result.push([field1[6], field1[7]]);
  });
  return result;
};

const arrObj = [
  {
    Field1: ["row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8"],
    Field2: [2, 2, 1, 3, 1, 4, 5, 5],
    // sorting file 2
    Field3: ["S", "A", "S", "S", "A", "A", "S", "A"],
  },
];
console.log(convertArr(arrObj));
