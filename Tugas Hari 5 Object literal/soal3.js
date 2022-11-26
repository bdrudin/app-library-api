// Soal No 3. Nilai Tertinggi
function nilaiTertinggi(siswa) {
  let result = [];
  for (let i = 0; i < siswa.length; i++) {
    const kelas = siswa[i].class;
    const data = {
      name: siswa[i].name,
      score: siswa[i].score,
    };
    result.push(kelas);
    result.push(data);
  }
  const newObj = {
    adonis: "",
    laravel: result[3],
    vuejs: result[7],
  };

  if (result[1].score > result[5].score) {
    newObj.adonis = result[1];
  } else {
    newObj.adonis = result[5];
  }
  return newObj;
}

const nilai = [
  {
    name: "Asep",
    score: 90,
    class: "adonis",
  },
  {
    name: "Ahmad",
    score: 85,
    class: "vuejs",
  },
  {
    name: "Regi",
    score: 74,
    class: "adonis",
  },
  {
    name: "Afrida",
    score: 78,
    class: "reactjs",
  },
];

console.log(nilaiTertinggi(nilai));
