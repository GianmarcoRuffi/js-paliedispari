/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// Autoroll function for pc
function autoRoll(rollNum) {
  const maxNum = 5;
  let rollNum = Math.floor(Math.random() * maxNum) + 1;

  console.log("Rolled number: " + rollNum);
}

autoRoll(cpuRoll);
console.log("Rolled number: " + cpuRoll);

// User choice

let userChoice = prompt("Scegli PARI o DISPARI.");

pari = false;

if (userChoice === "pari") {
  pari = true;
} else if (userChoice === "dispari") {
  pari = false;
}

console.log(userChoice);
console.log(pari);

let userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5."));

const numList = ["1", "2", "3", "4", "5"];

if (numList.includes(userNumber, 0)) {
  console.log("Hai fatto la tua scelta, ora sceglie il pc.");
} else {
  alert("Reinserisci il numero corretto!");
}
