//Scrivere tre programmi. Il primo che stampi un numero, un secondo che stampi una stringa ed un terzo che stampi un booleano
console.log("ESERCIZIO 1.1 \n ");
console.log(42);
console.log("Ciao Mondo!");
console.log(true && true);
console.log("\n");

//ESERCIZIO 1.2
console.log("ESERCIZIO 1.2 \n");
console.log(244**3);
console.log("\n");

//Scrivere un programma che stampi le potenze di 2 partendo dall’esponente 0 fino all’esponente 8. Il programma deve quindi stampare il risultato delle seguenti espressioni
console.log("ESERCIZIO 1.3 \n ");
console.log(2**0, 2**1, 2**2, 2**3, 2**4, 2**5, 2**6, 2**7, 2**8);
console.log("\n");

//Scrivere un programma che calcoli e stampi se il proprio numero di matricola è divisibile per 2.
console.log("ESERCIZIO 1.4 \n ");
console.log((603274 % 2) == 0);
console.log("\n");

//Scrivere un programma che stampi su righe separate i propri dati anagrafici: nome, cognome, luogo dinascita e data di nascita.

//Scrivere un programma che aggiunga all’output dell’esercizio precedente una stringa, stampata a video su una nuova riga, che indichi il voto sperato per l’esame di FTP. Si utilizzi l’operatore di concatenazione tra stringhe e almeno una sequenza di escape.
console.log("ESERCIZIO 1.5 e 1.6 \n ");
console.log("Giovanni \nPasqualini \nRotterdam \n10/11/1999 ");
console.log("30 \"e lode");
console.log("\n");

//Scrivere un programma che calcoli e stampi se il numero corrispondente alle prime 2 cifre del proprio numero di matricola è divisibile per il numero corrispondente all’ultima cifra del proprio numero di matricola
console.log("ESERCIZIO 1.7 \n ");
console.log("Numero Matricola:603274");
console.log((60 % 4) == 0);
console.log("\n");

//Scrivere un programma che calcoli e stampi la circonferenza di un cerchio con raggio 51.2 cm.
console.log("ESERCIZIO 1.8 \n");
console.log(2* 3,14 * 51.2);
console.log("\n");

//Scrivere un programma che calcoli e stampi l’area di un cerchio con raggio 10.5 m.
console.log("ESERCIZIO 1.9 \n");
console.log(3.14 * (10.5 ** 2));
console.log("\n");

//Scrivere un programma che calcoli e stampi il raggio di un cerchio con circonferenza 50.23 cm.
console.log("ESERCIZIO 1.10 \n");
console.log(50.23 / (2 * 3.14));
console.log("\n");

//Scrivere un programma che calcoli e stampi il lato di un quadrato con perimetro 70 cm.
console.log("ESERCIZIO 1.11 \n");
console.log(70 / 4);
console.log("\n");

//Scrivere un programma che stampi l’area di un quadrato di lato 10.
console.log("ESERCIZIO 1.12 \n");
console.log(10 ** 2);
console.log("\n");

//Si consideri quindi un quadrato di lato 10 + 𝛿, dove 𝛿 rappresenta un incremento positivo e arbitrariamente piccolo. Si stampi quindi il risultato che si ottiene calcolando l’area del quadrato di lato 10 + 𝛿 per almeno 3 valori di 𝛿 (scelti a piacere)
console.log("ESERCIZIO 1.13 \n");
console.log((10 + 1) ** 2);
console.log((10 + 2) ** 2);
console.log((10 + 3) ** 2);
console.log((10 + 4) ** 2);
console.log((10 + 5) ** 2);
console.log("\n");

//Si scriva un programma che stampi dopo quanto tempo si arriva a destinazione se si prende la Fi-Pi-Li al km 20 e si esce al km 60, sapendo che sono stati impiegati 30 minuti per percorrere la strada fino al km 44. Si assuma di viaggiare ad una velocità costante.
console.log("ESERCIZIO 1.14 \n");
console.log("Chilometri da Percorrere:");
console.log(60 - 20);
console.log("\n");
console.log("Chilometri Percorsi:");
console.log(44 - 20);
console.log("\n");
console.log("Tempo Impiegato:");
console.log(30, "minuti");
console.log("\n");
console.log("Velocità Media:");
console.log(60 / 30 * 24);
console.log("\n");
console.log("Tempo per Percorrere 40km");
console.log((60 * 40) / 48);
console.log("\n");

//Scrivere tre programmi che stampino il valore delle unità, decine e centinaia di un qualunque numero (scelto a piacere) di almeno 4 cifre (si utilizzino gli operatori di divisione e modulo).
console.log("ESERCIZIO 1.15 \n");
console.log("Numero: 1234\n");
console.log("UNITA");
console.log(1234 % 10);
console.log("DECINE");
console.log(((1234 % 100) - (1234 % 10)) / 10);
console.log("CENTINAIA");
console.log(((1234 % 1000) - (1234 % 100)) / 100);
console.log("\n");

//Scrivere tre programmi che stampino il valore delle unità, decine e centinaia del cubo di un qualunque numero di almeno 4 cifre (si utilizzino gli operatori di divisione e modulo).
console.log("ESERCIZIO 1.16 \n");
console.log("UNITA");
console.log((1234 ** 3) % 10);
console.log("DECINE");
console.log((((1234 ** 3) % 100) - ((1234 ** 3) % 10)) / 10);
console.log("CENTINAIA");
console.log((((1234 ** 3) % 1000) - ((1234 ** 3) % 100)) / 100);
console.log("\n");

//Un anno bisestile è identificato da un intero maggiore di 1584 che sia divisibile per 4 ma non per 100, oppure che sia divisibile per 400. Usando gli operatori booleani (e aritmetici) scrivere un programma che risponda alla domanda: l’anno 2000 è bisestile? (si stampi a video il risultato booleano ottenuto).
console.log("ESERCIZIO 1.17 \n");
console.log((2000 > 1584) && ((2000 % 4 == 0 && 2000 % 100 != 0) || 2000 % 400 == 0));
console.log("\n");

//Scrivere un programma che usando gli operatori booleani stampi la risposta alla domanda: l'anno 20XY è un anno bisestile? (dove X e Y sono la seconda e la terza cifra del proprio numero di matricola).
console.log("ESERCIZIO 1.18 \n");
console.log((2074 > 1584) && ((2074 % 4 == 0 && 2074 % 100 != 0) || 2074 % 400 == 0))
console.log("\n");
