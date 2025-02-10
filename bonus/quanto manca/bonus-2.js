
/* quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date. */

 
// Stabilire l'ora attuale
const data = new Date() ;
const hour = data.getHours();
const minute = data.getMinutes();





// attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora

const remain = Number(60 - minute )

console.log(hour + ':' + minute );
console.log('rimangono '+ remain + ' min alla prossima ora' );





