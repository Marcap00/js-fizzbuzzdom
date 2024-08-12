/* 
1. Recuperiamo gli elementi dal DOM
2. Preparo le variabili che mi potrebbero servire
3. Creo gli elementi che devo far apparire in pagina
    - container
    - row list
3. Apriamo un ciclo che stampi in pagina i numeri da 1 a 100 ognuno dentro un quadrato
    * Interno al ciclo
    - Creo le colonne e i quadrati
    4. Apriamo una condizione che: 
    - Per i multipli di 3 e 5 stampa FizzBuzz
    - Per i multipli di 5 stampa Buzz al posto del numero
    - Per i multipli di 3 stampa Fizz al posto del numero
    5. Agganciamo questi valori ai quadrati
4. Facciamo apparire gli elementi in pagina
*/


// # Fase preparatoria
const result = document.getElementById('result');

// Creo due variabile d'appoggio per i numeri e il testo
let number = '';
let text = '';
// Creo l'elemento container
const container = document.createElement('div');
// Gli assegno la classe container
container.className = 'container';
// Creo la lista degli oggetti
const rowList = document.createElement('div');
// Gli assegno la classe row
rowList.className = 'row justify-content-center';
// Aggancio la lista al container
container.appendChild(rowList);

// # Fase di elaborazione
// Inzializzo il ciclo for
for (let i = 1; i <= 100; i++) {
    // Assegno il valore di i alla variabile number
    number = i;
    // Creo le colonne
    const col = document.createElement('div');
    // Gli assegno le classi col e padding
    col.className = 'col py-3 flex-grow-0';
    // Creo i quadrati
    const square = document.createElement('div');
    // Gli assegno le classi per il quadrato
    square.className = 'square d-flex justify-content-center align-items-center';
    // Apro un condizione 
    // * Se il numero è multiplo di 3 e 5
    if (!(i % 3) && !(i % 5)) {
        // Assegno al text la parola
        text = 'FizzBuzz';
        // Dopo assegno il testo al numero
        number = text;
        // Aggiungo alla classlist la classe bg-fizzbuzz
        square.classList.add('bg-fizzbuzz');
    } else if (!(i % 5)) {   // * Se il numero è multiplo di 5
        text = 'Buzz';
        number = text;
        square.classList.add('bg-buzz');
    } else if (!(i % 3)) {   // * Se il numero è multiplo di 5
        text ='Fizz'
        number = text;
        square.classList.add('bg-fizz');
    }
    
    // Dopo il ciclo creo un text node che contiene il valore di number
    const textNode = document.createTextNode(number);
    // Aggancio al elemento square il text node
    square.appendChild(textNode);
    // Aggancio i quadrati alle colonne
    col.appendChild(square);
    // Aggancio le colonne alla row list
    rowList.appendChild(col);
}
console.log(rowList);

// Lo agganciamo al div con id result per farlo apparire in pagina
result.appendChild(container);



