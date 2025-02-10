// pari o dispari:

/* Tools
 - Prompt per chiedere il valore pari o dispari
 - prompt per l'inserimento del numero tra 1 e 9 
 - const/let
 - Math.random Math.floor
 - if/else
 - operatore modulo % per il resto della divisione
 - console.log
 */

//preparazione

// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
const userChoice = prompt('scegli pari o dispari, esempio [pari, dispari]')
console.log(userChoice);
const userNum = Number( prompt ('inserire valore numerico tra 0 e 9 es [1,2,3]'))
console.log(userNum);

// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
const pcNum = Math.floor(Math.random() * 9.) + 1
console.log(pcNum);
// somma il numero utente con numero pc
const sum = userNum + pcNum
console.log(sum);

// verificare se il num e` pari e se l'utente ha scelto pari dichiarare che user ha vinto altimenti ha vinto pc
if (sum % 2 === 0 && userChoice == 'pari'){
  alert('Hai vinto!!!')
} else if (sum % 2 !=  0 && userChoice == 'dispari'){
  alert('Hai vinto!!')
} else {
  alert ('Ritenta sarai piu fortunato')
}