/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/



// chidere all'utente km ed eta`

const kmInfo = Number(prompt('Quanti km vuoi percorrere?'))
console.log(kmInfo)

const age = Number(prompt('Quanti anni hai?'))
console.log(age)

let price = kmInfo * 0.21

// calcolare il prezzo del biglietto
if (age < 16){
  
  let discount = price - (price / 100 * 20)
  alert(`prezzo finale euro: ${discount.toFixed(2)}` );  

} else if (age > 65){
  let discount = price - (price / 100 * 40)
  alert(`prezzo finale euro: ${discount.toFixed(2)}` ) 

} else {
  alert(`prezzo finale euro: ${price}` )
}