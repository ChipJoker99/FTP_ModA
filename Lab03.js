//Scrivere un programma che definisca una funzione bisestile che, avendo come parametro un valore numerico, restituisca il valore booleano true se il parametro rappresenta un anno bisestile, e false in caso contrario.
//Si completi il programma invocando la funzione precedentemente definita (e visualizzando il risultato ottenuto), passando come parametro i seguenti valori: 1982, 2015, 2100, 2020, 1734, 1400, 2016.
//Nota: la funzione deve restituire il valore calcolato, non deve visualizzare il risultato.

console.log("ESERCIZIO 3.1 \n");

function bisestile(anno){
 return (anno > 1584) && ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) ;
}

console.log(bisestile(1982));
console.log(bisestile(2015));
console.log(bisestile(2100));
console.log(bisestile(2020));
console.log(bisestile(1734));
console.log(bisestile(1400));
console.log(bisestile(2016));

console.log("\n");

//Scrivere un programma che definisca le seguenti funzioni:
//• area_rettangolo che, avendo come parametri la base e l’altezza, restituisca l’area del rettangolo corrispondente;
//• area_cerchio che, avendo come parametro il raggio, restituisca l’area del cerchio corrispondente.
//Si invochino nel modo appropriato le due funzioni precedentemente definite con valori scelti a piacere e si visualizzi il valore ottenuto dell’area del rettangolo e dell’area del cerchio.
//Nota: le funzioni devono restituire il valore calcolato, non devono stampare il risultato.

console.log("ESERCIZIO 3.2 \n");

function area_rettangolo(base,altezza){
  return (base*altezza);
}

function area_cerchio(raggio){
  return raggio**2*Math.PI;
}

console.log(area_rettangolo(2,3));
console.log(area_cerchio(4));

console.log("\n");

//L’operatore booleano binario XOR(a,b) calcola:
//• true, quando solamente uno tra a e b è true,
//• false, in tutti gli altri casi.
//Si scriva un programma che definisca una funzione XOR che, avendo come parametri due valori booleani a e b, restituisca il risultato di XOR(a, b).
//Si completi il programma invocando la funzione precedentemente definita per tutte le possibili combinazioni di valori booleani per i suoi parametri (in totale sono 4), e si visualizzino i risultati ottenuti.
//Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.

console.log("ESERCIZIO 3.3")

function XOR(a,b){
  return((a==true && b==false) || (a==false && b==true));
}

console.log(XOR(true,false));
console.log(XOR(true,true));
console.log(XOR(false,true));
console.log(XOR(false,false));

console.log("\n");

//Scrivere un programma che definisca una funzione media_aritmetica_4, la quale, avendo come parametri 4 valori numerici, calcoli e restituisca la loro media aritmetica.
// Si completi il programma invocando la funzione precedentemente definita passando come parametri i seguenti valori: 30, 30, 18, 25. Si visualizzi quindi il risultato ottenuto.
//Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.

console.log("ESERCIZIO 3.4");

function media_aritmetica_4(a,b,c,d){
  return (a+b+c+d)/4;
}

console.log(media_aritmetica_4(30,30,18,25));

console.log("\n");

//Definire una funzione con 3 parametri: p (il numero di partecipanti ad una festa), b (il numero di bottiglie di Chianti che sono state acquistate), c (la capacità di ciascuna bottiglia di vino). Assumendo che un bicchiere contenga 100 ml di liquido, la funzione deve calcolare quanti bicchieri di vino può bere un partecipante in media.
//Si completi il programma invocando la funzione precedentemente definita 3 volte, passando come parametri i seguenti valori:
//• 10 persone, 3 bottiglie, 75 cl
//• 50 persone, 10 bottiglie, 70 cl
//• 3 persone, 2 bottiglie, 50 cl.
//Il programma deve quindi visualizzare i risultati ottenuti nei 3 casi.

console.log("ESERCIZIO 3.5 \n");

function alcol_fest(p,b,c){
  return (((b*c)/p)/10);
}

console.log(alcol_fest(10,3,75));
console.log(alcol_fest(50,10,70));
console.log(alcol_fest(3,2,50));

console.log("\n");

//Definire la funzione polinomio, che calcoli 
//f(n) = n^3 + 3n^2 + 2n + 5, dove n è un parametro numerico.
//Scrivere inoltre il frammento di programma che invochi la funzione f (due volte), con i valori n = 2 ed n = 5, e visualizzi i risultati ottenuti (cioe’ quelli restituiti dalla funzione nei due casi). 

console.log("ESERCIZIO 3.6 \n");

function polinomio(n){
  return n**3 + 3*n**2 + 2*n + 5;
}

console.log(polinomio(2));
console.log(polinomio(5));

console.log("\n");

//L’equazione di secondo grado ax^2 + bx + c = 0 ha due soluzioni (radici), date da:
//x1,2=(-b+-sqrt(b^2-4ac))/2a
//Definire una funzione che, avendo come parametri i 3 coefficienti a, b, e c, calcoli e restituisca in output il valore della soluzione più piccola.
//Si completi il programma invocando la funzione precedentemente definita, usando come parametri attuali 3 valori numerici scelti a piacere. Si visualizzi quindi il risultato ottenuto (cioe’quello restituito dalla funzione).

console.log("ESERCIZIO 3.7 \n");

function equazione(a,b,c){
 return (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2*a);
}

console.log(equazione(4,8,1));

console.log("\n");

//Definire le seguenti tre funzioni:
//• unita: dato un parametro numerico n di almeno 4 cifre restituisce il numero di unità di n;
//• decine: dato un parametro numerico n di almeno 4 cifre restituisce il numero di decine di n;
//• centinaia: dato un parametro numerico n di almeno 4 cifre restituisce il numero di centinaia di n.
//Completare il programma invocando le tre funzioni precedentemente definite, passando come parametro i valori: 4571, 124

console.log("ESERCIZIO 3.8 \n");

function unita(n){
 return n % 10;
}

function decine(n){
 return (n % 100 - n % 10)/10;
}

function centinaia(n){
  return ((n % 1000 - n % 100)/100);
}

console.log("4571 \n");
console.log("UNITA' =",unita(4571));
console.log("DECINE =",decine(4571));
console.log("CENTINAIA =",centinaia(4571));
console.log("\n");
console.log("124 \n");
console.log("UNITA' =",unita(124));
console.log("DECINE =",decine(124));
console.log("CENTINAIA =",centinaia(124));

console.log("\n");

/*Scrivere una funzione inverti3 che, dato un parametro numerico n di 3 cifre, restituisca il numero che si ottiene invertendo l’ordine delle cifre di n. Si utilizzino per questo esercizio le funzioni già scritte nell’esercizio 3.8.
Si visualizzi il risultato della chiamata alla funzione definita in questo esercizio per i seguenti valori numerici:
• 123 (si verifichi che il risultato sia 321);
• 392 (si verifichi che il risultato sia 293);
• 512 (si verifichi che il risultato sia 215).*/

console.log("ESERCIZIO 3.9 \n");

function inverti3(n){
  return (n % 1000 - n % 100)/100+(n % 100 - n % 10)+(n % 10)*100;
}

console.log(inverti3(123));
console.log(inverti3(392));
console.log(inverti3(512));

console.log("\n");
