/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

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

const maxNum = 5;
let cpuNumber = Math.floor(Math.random() * maxNum) + 1;
console.log("cpunumber: " + cpuNumber);

let allowedNum = false;
let i = 0;

while (!allowedNum && i != numList.length) {
  console.log(i);

  if (userNumber === numList[i]) {
    allowedNum = true;
  }

  i++;
}

if (allowedNum) {
  console.log("Hai fatto la tua scelta, ora sceglie il pc.");
} else {
  alert("Reinserisci il numero corretto!");
  location.reload();
}
