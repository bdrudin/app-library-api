// Soal No. 2 (Naik Angkot)

const naikAngkot = (arrPenumpang) => {
  const rute = ["A", "B", "C", "D", "E", "F"];
  const harga = 2000;
  let data = [];

  arrPenumpang.forEach((item) => {
    const jalur = rute.indexOf(item[2]) - rute.indexOf(item[1]);
    const totalBayar = harga * jalur;

    const obj = {
      penumpang: item[0],
      naikDari: item[1],
      tujuan: item[2],
      bayar: totalBayar,
    };

    data.push(obj);
  });
  return data;
};

// EXAMPLE
let penumpang = [
  ["Dimitri", "B", "F"],
  ["Icha", "A", "B"],
];

// TEST CASE
console.log(naikAngkot(penumpang));
