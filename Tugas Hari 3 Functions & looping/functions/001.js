// No. 1
// Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai "Halo Sanbers!" yang kemudian dapat ditampilkan di
// console.

const teriak = (value = "Halo Sanbers!") => {
  return value;
};

// TEST CASE
console.log(teriak()); // "Halo Sanbers!"

// SAMPLE TEST
console.log(teriak("Halo, Annyeong, Hello, Nihao, Kon'nichiwa"));
console.log(teriak("Halo, saya Badrudin! salam kenal."));
console.log(teriak("Siapa kamu?"));
