/* 
1.Recuperiamo gli elementi dal DOM
2.Apriamo un ciclo interativo che stampi in console i numeri da 1 a 100
    //Interno al ciclo
    3.Apriamo una condizione che per i multipli di 3 stampa Fizz al posto del numero
    4.Per i multipli di 5 stampa Buzz al posto del numero
    5.Per i multipli di 3 e 5 stampa FizzBuzz
6.Stampiamo in pagina gli elementi
*/

/* Fase di elaborazione */
for (let i = 1; i <= 100; i++ ) {
    if (i % 3 === 0) {
        /* i = 'Fizz'; */
    } else if (i % 5 === 0){
        /* i = 'Buzz'; */
    }
    console.log('numero', i);
}