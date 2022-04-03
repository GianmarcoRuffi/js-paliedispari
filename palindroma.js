/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

/* 
La nostra funzione ha il seguente scopo: prendiamo una data string, in questo caso inserita dall'utente (string verrà sostituita da userString) e scomponiamo la string in un array che sarà formata dalle singole lettere della parola inserita dall'utente tramite .split . Dopodichè settiamo una variabile che corrisponde all'ordine inverso dell'array creato in questo modo tramite .reverse . Infine settiamo un'altra variabile che sarà uguale all'unione delle singole lettere della string scomposta in precedenza, ma nell'ordine inverso (Questo viene eseguito tramite .join applicata alla variabile che invertiva l'ordine degli elementi nella stringa sopra).

Dopo avere definito le suddette 3 variabili, non ci resta altro da fare che confrontare la parola inserita dall'utente tramite prompt (userString) con la variabile corrispondente alla stringa dell'utente ma con lettere invertite, come appena definita sopra.
Se le due stringhe corrispondono perfettamente, allora l'utente ha inserito una parola palindroma, altrimenti non sarà un palindromo in quanto le lettere inserite in ordine inverso cambiano completamente la parola.
*/

function checkPalindrome(string) {
  // Convert string to an array:

  const arrayValues = string.split("");

  // Reverse the array values:

  const reverseArrayValues = arrayValues.reverse();

  // Convert array to string:

  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log("Hai inserito un palindromo!");
    alert("Hai inserito un palindromo!");
  } else {
    console.log("Non è un palindromo!");
    alert("Non è un palindromo!");
  }
}

//User prompt
const userString = prompt("Inserisci una parola:").toLowerCase();

//Recall the function

checkPalindrome(userString);
