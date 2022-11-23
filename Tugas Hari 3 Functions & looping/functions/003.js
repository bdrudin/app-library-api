// No. 3
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan
// seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

const introduce = (name, age, address, hobby) => {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
};

// TEST CASE
console.log(introduce("Agus", 30, "Jogja", "Gaming"));

// SAMPLE TEST
console.log(introduce("Badrudin", 21, "Bogor - Jawa Barat", "Reading"));
