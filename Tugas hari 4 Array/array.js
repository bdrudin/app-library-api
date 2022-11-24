// Soal No. 1 (Array Multidimensi)
//contoh input
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

const dataHandling = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `Nomor ID: ${arr[i][0]} \nNama Lengkap: ${arr[i][1]} \nTTL: ${arr[i][2]} \nHobi: ${arr[i][3]} \n`
    );
  }
};

// Using function
dataHandling(input);

// Soal No. 2 (Balik Kata)
const balikKata = (string) => {
  let stringLama = string;
  let stringBaru = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringBaru += stringLama[i];
  }

  return stringBaru;
};

// Using function

console.log(balikKata("SanberCode"));
console.log(balikKata("racecar"));
console.log(balikKata("kasur rusak"));
console.log(balikKata("haji ijah"));
console.log(balikKata("I am Sanbers"));
