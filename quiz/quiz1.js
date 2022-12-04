function kelompokAngka(arr) {
  //Code disini
  let data = [];
  let ganjil = [];
  let genap = [];
  let kelipatanTiga = [];

  arr.forEach((item) => {
    if (item % 3 == 0) {
      kelipatanTiga.push(item);
    } else if (item % 2 == 0) {
      genap.push(item);
    } else if (item % 2 == 1) {
      ganjil.push(item);
    }
  });
  data.push(ganjil, genap, kelipatanTiga);
  //   data.slice(ganjil, genap);
  return data;
}

//Test Case
console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]));

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13, 27, 11, 15]));

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]));

//output:[[],[],[]]
function hitungVokal(str) {
  //code disini
  let count = 0;
  let result = str.split("");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "a" || result[i] === "A") {
      count++;
    } else if (result[i] === "i" || result[i] === "I") {
      count++;
    } else if (result[i] === "u" || result[i] === "U") {
      count++;
    } else if (result[i] === "e" || result[i] === "E") {
      count++;
    } else if (result[i] === "o" || result[i] === "O") {
      count++;
    }
  }
  console.log(count);
}

// Test Cases

console.log(hitungVokal("Adonis")); // Output:3

console.log(hitungVokal("Error")); //Output:2

console.log(hitungVokal("Eureka")); //Output:4

console.log(hitungVokal("Rsch")); // Output: 0

function tandaiA(str) {
  // code di sini
  let result = str.split("");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "a") {
      result[i] = "x";
    }
  }
  let data = result.join("");
  return data;
}

// Tes Cases
console.log(tandaiA("abrakadabra")); // xbrxkxdxbrx
console.log(tandaiA("garuda")); // gxrudx
console.log(tandaiA("kucing")); // kucing

function graduate(arr) {
  // code di sini
  let result = [];
  arr.forEach((item) => {
    const data = {
      name: item.name,
      score: item.score,
    };

    if (data.score > 85) {
      data.grade = "mastered";
    } else if (data.score >= 60) {
      data.grade = "completed";
    } else {
      data.grade = "participated";
    }

    result.push(data);
  });
  const newObj = {
    Laravel: [result[0], result[2]],
    Vue: [result[1]],
    React: [result[3]],
  };

  return newObj;
}

// TEST CASE
// Contoh Input

var arr = [
  { name: "Ahmad", score: 80, class: "Laravel" },

  { name: "Regi", score: 86, class: "Vuejs" },

  { name: "Robert", score: 59, class: "Laravel" },

  { name: "Bondra", score: 81, class: "Reactjs" },
];

console.log(graduate(arr));
