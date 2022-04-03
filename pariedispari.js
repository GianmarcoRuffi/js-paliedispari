/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// Autoroll function for pc

function autoRoll() {
  let resultNumber = Math.floor(Math.random() * 5) + 1;
  return resultNumber;
}

//Total user + cpu
function sum(num1, num2) {
  let total = num1 + num2;
  if (total % 2 === 0) {
    return true;
  }
  return false;
}

// User choice

let userChoice = prompt("Scegli PARI o DISPARI.");

pari = false;

if (userChoice === "pari") {
  pari = true;
} else if (userChoice === "dispari") {
  pari = false;
} else {
  alert("Errore! La pagina si ricaricherà e inizierai da capo.");
  location.reload();
}

console.log("YOU have chosen: " + userChoice);
console.log(pari);

// CPU choice

let cpuNumber = autoRoll();
console.log("CPU has chosen: " + cpuNumber);

let userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5."));

//Check number range

if (userNumber > 5 || userNumber < 1) {
  alert(
    "Non hai inserito un numero da 1 a 5. La pagina si ricaricherà e inizierai da capo."
  );
  location.reload();
} else if (isNaN(userNumber)) {
  alert("Errore! La pagina si ricaricherà e inizierai da capo.");
  location.reload();
}

console.log("YOU have chosen: " + userNumber);
