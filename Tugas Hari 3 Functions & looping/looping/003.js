// No. 3 Membuat Persegi Panjang #

function makeRectangle(panjang, lebar) {
  let pola = "";
  for (let i = 1; i <= lebar; i++) {
    for (let j = 1; j <= panjang; j++) {
      pola += "#";
    }
    pola += "\n";
  }
  console.log(pola);
}

// TEST CASE
makeRectangle(8, 4);
