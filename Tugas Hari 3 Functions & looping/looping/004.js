// No. 4 Membuat Tangga

function makeLadder(sisi) {
  let pola = "";
  for (let i = 1; i <= sisi; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }
    pola += "\n";
  }
  console.log(pola);
}

// TEST CASE
makeLadder(7);
