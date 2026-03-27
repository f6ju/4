const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let quiz = {
  "Hva er hovedstaden i Norge?": "oslo",
  "Hva er 2 + 2?": "4",
  "Hva heter verdens største hav?": "stillehavet"
};

let spørsmål = Object.keys(quiz);
let poeng = 0;
let i = 0;

function stillSpørsmål() {
  if (i < spørsmål.length) {
    
    let q = spørsmål[i];

    rl.question(q + " ", function(svar) {
      
      if (svar.toLowerCase() === quiz[q]) {
        console.log("Riktig!");
        poeng++;
      } else {
        console.log("Feil! Riktig svar er:", quiz[q]);
      }

      i++;
      stillSpørsmål();
    });

  } else {
    console.log("\nDu fikk", poeng, "av", spørsmål.length, "poeng!");
    rl.close();
  }
}

stillSpørsmål();