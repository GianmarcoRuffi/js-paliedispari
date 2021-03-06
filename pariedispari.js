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

// User choice : even or odd

let userChoice = prompt("Scegli PARI o DISPARI.");

if (userChoice != "pari" && userChoice != "dispari") {
  alert("Errore! La pagina si ricaricherà e inizierai da capo.");
  location.reload();
}

console.log("YOU have chosen: " + userChoice);

// CPU number

let cpuNumber = autoRoll();

// User number

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
console.log("CPU has chosen: " + cpuNumber);

// Total

function sumIsEven(number1, number2) {
  let sum = number1 + number2;
  console.log("Total: " + sum);
  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let result = sumIsEven(userNumber, cpuNumber);

console.log(result);

if (userChoice === "pari" && result) {
  console.log("Hai vinto con PARI!");
} else if (userChoice === "dispari" && !result) {
  console.log("Hai vinto con DISPARI!");
} else console.log("Hai perso...");
