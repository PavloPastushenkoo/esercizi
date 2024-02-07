/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

// slice ti crea array senza modificare quello iniziale; array e stringa

//splice ti va a modificare array esistente iniziale e prende (indice partenza, quantità indici da prendere); solo array

//substring
function concatena(string1, string2) {
  const sottostringa1 = string1.substring(0, 2);
  const sottostringa2 = string2.substring(string2.length - 3);
  const stringa3 = sottostringa1.concat(sottostringa2);
  console.log(stringa3);
}
concatena("fabio", "pavlo");

function mettiInsieme(stringa1, stringa2) {
  const stringa3 = stringa1
    .slice(0, 2)
    .concat(stringa2.slice(stringa2.length - 3));
  console.log(stringa3);
}
mettiInsieme("ciao", "bello");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function elementi10(){
    const numeriCasuali = [];
    for (let i = 0; i <= 10; i ++){
        const numeroCasuale = Math.floor(Math.random() * 101);
        numeriCasuali.push(numeroCasuale);
    }
    return numeriCasuali;
}
const arrayCasuale = elementi10();
console.log(arrayCasuale);