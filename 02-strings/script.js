// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
  const nome = 'Mattia'
// Stampa il valore di nome nella console.
  console.log(nome);

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
let number;
let text;
let bool;
// un numero, una stringa e un valore booleano.
number = 11;
text = 'ciao';
bool = 0;
// Stampa tutti i valori nella console.
console.log(number, text, bool);


// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length;
console.log(numberOfLettersInAlphabet); // Output: 26