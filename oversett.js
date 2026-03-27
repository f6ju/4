const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ordbok = {
  "hello": "hei",
  "dog": "hund",
  "cat": "katt",
  "car": "bil",
  "house": "hus"
};

rl.question("Skriv et engelsk ord: ", function(ord) {

  if (ordbok[ord]) {
    console.log("Oversettelse:", ordbok[ord]);
    rl.close();
  } else {
    console.log("Fant ikke ordet.");

    rl.question("Vil du legge det til? (ja/nei): ", function(svar) {
      
      if (svar === "ja") {
        rl.question("Skriv norsk oversettelse: ", function(norsk) {
          ordbok[ord] = norsk;
          console.log("Lagt til!");
          console.log(ord, "=", norsk);
          rl.close();
        });
      } else {
        rl.close();
      }

    });
  }

});