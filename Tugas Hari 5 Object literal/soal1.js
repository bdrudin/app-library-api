// Soal No. 1 (Array to Object)
const arrayToObject = (arr) => {
  // looping array
  arr.forEach((item, i) => {
    // generate date
    const now = new Date();
    thisYear = now.getFullYear();

    // generate object
    const obj = {
      firstName: item[0],
      lastName: item[1],
      gender: item[2],
    };

    if (item[3] > thisYear || !item[3]) {
      obj.age = "Invalid Birth Year";
    } else {
      obj.age = thisYear - item[3];
    }

    // create fullname
    const fullname = obj.firstName + " " + obj.lastName;
    console.log(`${i + 1}. ${fullname} : `, obj);
  });
};

// Example
let people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];

let people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];

// TEST CASE
arrayToObject(people);
arrayToObject(people2);
