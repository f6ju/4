const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let filmer = ["Inception", "Titanic", "Matrix", "Death Note", "Børning"];

for (let i = 0; i < filmer.length; i++) {
  console.log(i + ": " + filmer[i]);
}

rl.question("Skriv 'legg til' eller 'fjern': ", function(svar) {

  if (svar === "legg til") {
    rl.question("Ny film: ", function(nyFilm) {
      filmer.push(nyFilm);
      console.log("Ny liste:", filmer);
      rl.close();
    });

  } else if (svar === "fjern") {
    rl.question("Hvilket nummer vil du fjerne?: ", function(nr) {
      filmer.splice(nr, 1);
      console.log("Ny liste:", filmer);
      rl.close();
    });

  } else {
    console.log("Feil valg");
    rl.close();
  }

});