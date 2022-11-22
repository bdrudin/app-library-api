// Soal No. 1 (Membuat kalimat)
let word = "JavaScript";
second = "is";
third = "awesome";
fourth = "and";
fifth = "I";
sixth = "love";
seventh = "it!";

const results = word
  .concat(" ", second)
  .concat(" ", third)
  .concat(" ", fourth)
  .concat(" ", fifth)
  .concat(" ", sixth)
  .concat(" ", seventh);

console.log(results);
console.log("");
// Soal No.2 Mengurai kalimat (Akses karakter dalam string)
let sentence = "I am going to be React Native Developer";

let firstword = sentence[0];
secondword = sentence[2] + sentence[3];
thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
fourthWord = sentence[11] + sentence[12];
fifthWord = sentence[14] + sentence[15];
sixthWord =
  sentence[17] +
  sentence[18] +
  sentence[19] +
  sentence[20] +
  sentence[21] +
  sentence[22];
seventhWord =
  sentence[23] +
  sentence[24] +
  sentence[25] +
  sentence[26] +
  sentence[27] +
  sentence[28];
eighthWord =
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33] +
  sentence[35] +
  sentence[36] +
  sentence[37] +
  sentence[38];

console.log(`First Word: ${firstword}`);
console.log(`Second Word: ${secondword}`);
console.log(`Third Word: ${thirdWord}`);
console.log(`Fourth Word: ${fourthWord}`);
console.log(`Fifth Word: ${fifthWord}`);
console.log(`Sixth Word: ${sixthWord}`);
console.log(`Seventh Word: ${seventhWord}`);
console.log(`Eighth Word: ${eighthWord}`);
console.log("");

// Soal No. 3 Mengurai Kalimat (Substring)
let sentence2 = "wow JavaScript is so cool";

let firstWord2 = sentence2.substring(0, 3);
secondWord2 = sentence2.substring(4, 14);
thirdWord2 = sentence2.substring(15, 17);
fourthWord2 = sentence2.substring(18, 20);
fifthWord2 = sentence2.substring(21, 25);

console.log(`First Word: ${firstWord2}`);
console.log(`Second Word: ${secondWord2}`);
console.log(`Third Word: ${thirdWord2}`);
console.log(`Fourth Word: ${fourthWord2}`);
console.log(`Fifth Word: ${fifthWord2}`);

console.log("");
// Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
let sentence3 = "wow JavaScript is so cool";

let firstWord3 = sentence3.substring(0, 3);
secondWord3 = sentence3.substring(4, 14);
thirdWord3 = sentence3.substring(15, 17);
fourthWord3 = sentence3.substring(18, 20);
fifthWord3 = sentence3.substring(21, 25);

let firstWordLength = firstWord3.length;
secondWordLength = secondWord3.length;
thirdWordLength = thirdWord3.length;
fourthWordLength = fourthWord3.length;
fifthWordLength = fifthWord3.length;

console.log(`First Word: ${firstWord3}, with length: ${firstWordLength}`);
console.log(`Second Word: ${secondWord3}, with length: ${secondWordLength}`);
console.log(`Third Word: ${thirdWord3}, with length: ${thirdWordLength}`);
console.log(`Fourth Word: ${fourthWord3}, with length: ${fourthWordLength}`);
console.log(`Fifth Word: ${fifthWord3}, with length: ${fifthWordLength}`);
console.log(`\n Sentence length: ${sentence3.length}`);
