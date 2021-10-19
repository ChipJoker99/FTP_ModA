//Scrivere un programma che inizializzi due variabili x ed y (assegnando valori a piacere) e visualizzi il risultatodell’operazione x^y.
console.log("ESERCIZIO 2.1 \n");
var x = 2;
var y = 7;
console.log(Math.pow(x,y));
console.log("\n");

//Scrivere un programma che inizializzi due variabili x ed y (assegnando valori a piacere) e visualizzi il risultato delle due operazioni: 
//logx^y
//e^(x^y)
console.log("ESERCIZIO 2.2 \n");
var x = 2;
var y = 7;
console.log(Math.log(Math.pow(2, 7)));
console.log(Math.pow(Math.E**x, y));
console.log("\n");

//Scrivere un programma che inizializzi una variabile x con un valore numerico a piacere contenente almeno 4 cifre (ad esempio 1234). Il programma deve quindi calcolare e visualizzare:
//- le unita’
//- le decine
//- le centinaia
//presenti nel valore di x
console.log("ESERCIZIO 2.3 \n");
var x = 7824;
console.log("NUMERO", 7824);
console.log("UNITA' =", x % 10);
console.log("DECINE =", (x % 100 - (x % 10)) / 10);
console.log("CENTINAIA =", ((x % 1000)-(x % 100)) / 100);
console.log("\n");

//Scrivere un programma che inizializzi una variabile x con un valore numerico a piacere e, interpretandolo come l’area di un cerchio, visualizzi l’area del cerchio il cui diametro è il doppio di quello iniziale.
console.log("ESERCIZIO 2.4 \n");
x = 72;
var diametro = ((Math.sqrt(x / Math.PI))*2);
console.log(diametro * diametro * Math.PI);
console.log("\n");

//Scrivere un programma che inizializzi due variabili s1 ed s2 con due stringhe scelte a piacere e visualizzi se la prima precede la seconda nell’ordinamento lessicografico

console.log("ESERCIZIO 2.5 \n");
var s1 = "pietra";
var s2 = "pietro";
console.log(s1 < s2);
console.log("\n");

//Scrivere un programma che inizializzi tre variabili K, H e T con valori numerici scelti a piacere. Il programma successivamente deve calcolare e visualizzare la velocità media a cui si viaggia se si entra in Fi-Pi-Li al km K e si esce al km H dopo T minuti.
console.log("ESERCIZIO 2.6 \n");
var K = 20;
var H = 60;
var T = 24;
console.log("VELOCITA' MEDIA =", ((H-K)/T)*60);
console.log("\n");

//Scrivere un programma che inizializzi una variabile n con un valore numerico scelto a piacere. Successivamente si calcoli e si visualizzi se n rappresenta un anno bisestile o meno.
console.log("ESERCIZIO 2.7 \n");
var n = 200;
console.log((n > 1584) && ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0));
console.log("\n");

//Scrivere un programma che inizializzi una variabile di nome durata con un valore numerico scelto a piacere. Interpretando il valore di durata come la durata in minuti di una chiamata telefonica, il programma deve calcolare e visualizzare il costo della chiamata, sapendo che il costo dello scatto alla risposta e’ 0.18 €, il primo minuto e’ gratuito, e tutti i minuti successivi al primo hanno un costo di 0.16 €.
console.log("ESERCIZIO 2.8 \n");
var durata = 20;
console.log("COSTO CHIAMATA =", (0.18+(durata - 1)*0.16), "EURO");
console.log("\n");

//Scrivere un programma che inizializzi due variabili N ed M con valori numerici scelti a piacere. Il programma deve successivamente calcolare e visualizzare:
//• il massimo tra N ed M
//• il minimo tra N ed M
//• se N è minore o uguale di M
//• se N è compreso tra 0 ed M
//• se N è divisibile per M
console.log("ESERCIZIO 2.9 \n");
var N = 6;
var M = 12;
console.log(Math.max(N, M));
console.log(Math.min(N, M));
console.log(N <= M);
console.log(N >= 0 && N <= M);
console.log(N % M == 0)
console.log("\n");

//Scrivere un programma che inizializzi una variabile N con un valore numerico intero scelto a piacere. Il programma deve quindi generare un numero casuale intero compreso tra 0 ed N, e infine visualizzarlo.
console.log("ESERCIZIO 2.10 \n");
var N = 17;
console.log(Math.round(Math.random() * N));
console.log("\n");

//Scrivere un programma che inizializzi una variabile N con un valore numerico intero scelto a piacere. Successivamente calcoli e visualizzi (su righe successive):
//• il numero più grande che è possibile rappresentare con N cifre binarie,
//• il numero più grande che è possibile rappresentare con N cifre esadecimali.
console.log("ESERCIZIO 2.11 \n");
var N = 4;
console.log("CIFRE BINARIE =", Math.pow(2, N) - 1);
console.log("CIFRE ESADECIMALI =", Math.pow(16, N)- 1);
console.log("\n");

//Scrivere un programma che inizializzi due variabili, N ed M, con valori numerici interi scelti a piacere. Successivamente il programma calcoli e visualizzi:
//• il numero più grande che si può rappresentare con N cifre in base M,
//• se il numero più grande che si può rappresentare con N cifre in base 2 è maggiore o uguale al numero più grande che si può rappresentare con M cifre in base 16.
console.log("ESERCIZIO 2.12 \n");
var N = 5;
var M = 7;
console.log(Math.pow(M,N)-1);
console.log(Math.pow(2,N)-1 >= Math.pow(16,M)-1);
console.log("\n");

//Sapendo che loga(b) = ln(b)/ln(a) dove ln rappresenta il logaritmo naturale, scrivere un programma che inizializzi due variabili a e b con valori numerici scelti a piacere, e successivamente visualizzi il risultato di loga(b).
console.log("ESERCIZIO 2.13 \n");
var a = 2;
var b = 3;
console.log("loga(b) :",Math.log(b)/Math.log(a));
console.log("\n");

//Scrivere un programma che inizializzi una variabile N con un valore numerico intero scelto a piacere esuccessivamente calcoli e visualizzi il numero di bit necessari a rappresentarlo.
console.log("ESERCIZIO 2.14 \n");
var N = 5;
console.log("NUMERO DI BIT NECESSARI A RAPPRESENTARE :", + N +"\n" + Math.log(N)/Math.log(2) +1);
console.log("\n");

/*
n^ = 5+*/

/*BIT*/console.log(N + Math.log(N)/Math.log(2) + 1);

//2^n-1 = x
//x= 5
//2^n -1 = 5
//2^n = 5 +1
//2 ^ n = log2(n) = log(n) /log(2)
//log(n) /log(2) = 6
//log(n) = N*log(2)

//2^N -1 = N

//Math.log(N)/Math.log(2) = N+1
