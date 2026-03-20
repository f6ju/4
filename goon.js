const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Skriv inn poeng (0-100): ", function(input) {
  
  let poeng = Number(input);

  if (isNaN(poeng)) {
    console.log("Feil: Du må skrive et tall!");
  } else if (poeng < 0 || poeng > 100) {
    console.log("Feil: Poeng må være mellom 0 og 100!");
  } else {
    
    let karakter;

    if (poeng < 40) {
      karakter = 1;
    } else if (poeng < 50) {
      karakter = 2;
    } else if (poeng < 60) {
      karakter = 3;
    } else if (poeng < 80) {
      karakter = 4;
    } else if (poeng < 90) {
      karakter = 5;
    } else {
      karakter = 6;
    }

    console.log("Karakter:", karakter);
  }

  rl.close();
});