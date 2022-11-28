const filterData = (arr, kelas) => {
  const results = arr.filter((item) =>
    item["kelas"].toLowerCase().includes(kelas.toLowerCase())
  );

  return results;
};

const data = [
  {
    name: "Ahmad",
    kelas: "adonis",
  },
  {
    name: "Regi",
    kelas: "laravel",
  },
  {
    name: "Bondra",
    kelas: "adonis",
  },
  {
    name: "Iqbal",
    kelas: "vuejs",
  },
  {
    name: "Putri",
    kelas: "Laravel",
  },
];

module.exports = { filterData, data };
