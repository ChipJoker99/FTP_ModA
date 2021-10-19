/*Scrivere una funzione in JavaScript che abbia un parametro numerico x. La funzione deve calcolare
e restituire in output il valore assoluto di x (cioe’ x, se x e’ positivo, e -x, se x e’ negativo).
Nota: Non usare la funzione Math.abs(). Inoltre la funzione deve restituire il valore calcolato, non
deve stampare il risultato.
Si scriva quindi un frammento di programma che invoca la funzione precedentemente definita e
stampa il risultato ottenuto. Si considerino i seguenti valori come parametri attuali nell’invocazione:
1, 3.3, -2, 14, -5.*/

console.log("ESERCIZIO 4.1 \n");

function val_ass(x){
  if(x < 0)
    return -x;
  else
    return x;
}

console.log(val_ass(1));
console.log(val_ass(3.3));
console.log(val_ass(-2));
console.log(val_ass(14));
console.log(val_ass(-5));

console.log();

/*Scrivere una funzione in JavaScript che abbia un parametro numerico x. La funzione deve calcolare
e restituire in output il seguente valore:
|0, se x < 0
|x, se x ≥ 0
Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.
Si scriva quindi un frammento di programma che invoca la funzione precedentemente definita e
stampa il risultato */

console.log("ESERCIZIO 4.2 \n");

function relux(x){
  if(x>=0)
    return x
  else
    return 0
}

console.log(relux(3));
console.log(relux(0));
console.log(relux(-2));

console.log();

/*Si scriva un funzione in JavaScript con un parametro numerico che rappresenta la velocità di un
veicolo in km orari. La funzione deve calcolare e restituire in output l’eventuale multa (in euro) da
infliggere al conducente, secondo la normativa vigente sulle autostrade che risulta dalla seguente
tabella:
Si completi il programma invocando la funzione precedentemente definita per ottenere la multa
inflitta ad un conducente che viaggiava alla velocità velocita_mezzo, stampando quindi un messaggio
che comunichi la sanzione inflitta al conducente. Si verifichi l’output in corrispondenza di (almeno)
i seguenti valori di velocita_mezzo: 100, 130, 180, 200, 201, 140. */

console.log("ESERCIZIO 4.3 \n");

function velox(v){
  if(v <= 130)
    return 0;
  else if(v <= 160)
   return 200;
  else if(v <= 200)
   return 500;
  else(v > 200)
   return 1000;
}

console.log(velox(100));
console.log(velox(130));
console.log(velox(140));
console.log(velox(180));
console.log(velox(200));
console.log(velox(201));

console.log();

/*Definire una funzione con un parametro g, che rappresenta il grado alcolico di una bevanda. La
funzione deve restituire una stringa che descrive il tipo di bevanda corrispondente, secondo la
seguente tabella:
Si completi il programma invocando la funzione precedentemente definita per ottenere la descrizione
di una bevanda di grado alcolico grado_a. Si stampi quindi un messaggio per comunicare il grado
alcolico della bevanda in questione. Si verifichi l’output del programma in corrispondenza (almeno)
dei seguenti valori di grado_a: 8.5, 14.5, 50, 17, 37, 99. */

console.log("ESERCIZIO 4.4 \n");

function grado_a(g){
  if(g <= 10.5)
    return "Vino Leggero";
  else if(g <= 12)
   return "Vino Normale";
  else if(g <= 15)
   return "Vino Forte";
  else if(g <= 20)
   return "Vino Liquoroso";
  else if(g <= 40)
   return "Alcolico";
  else(g > 40)
   return "Superalcolico";
}

console.log(grado_a(8.5));
console.log(grado_a(14.5));
console.log(grado_a(50));
console.log(grado_a(17));
console.log(grado_a(37));
console.log(grado_a(99));

console.log();

/*Definire una funzione che calcoli il tipo di un triangolo (equilatero, isoscele, scaleno) in base alla
lunghezza dei suoi lati. La funzione deve avere tre parametri: a, b, c, che rappresentano le lunghezze
dei lati del triangolo, e deve restituire in output una stringa che rappresenta il tipo di triangolo.
Si invochi la funzione precedentemente definita con i seguenti valori, stampando quindi il risultato
ottenuto: (3, 3, 3), (12, 10, 10), (3, 4, 5), (2, 5, 1).*/

console.log("ESERCZIO 4.5 \n");

function tipo_triangolo(a,b,c){
  if(a == b && b == c)
    return "Triangolo Equilatero";
  else if(a == b || b == c || a == c)
    return "Triangolo Isoscele";
  else
    return "Triangolo Scaleno";
}

console.log(tipo_triangolo(3,3,3));
console.log(tipo_triangolo(12,10,10));
console.log(tipo_triangolo(3,4,5));
console.log(tipo_triangolo(2,5,1));

console.log();

/* Scrivere la funzione vocale, che ha un parametro, lettera. La funzione controlla che la lettera sia una
vocale e restituisce true, false altrimenti.
Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.
Si invochi la funzione precedentemente definita, passando come parametri i seguenti valori: (a), (x),
(b), (u). Si stampi l’output per ciascuna invocazione della funzione.*/

console.log("ESERCIZIO 4.6 \n");

function vocale(lettera){
  if(lettera == "a" || lettera == "e" || lettera == "i" || lettera == "o" || lettera == "u")
    return true;
  else
    return false;
}

console.log(vocale("a"));
console.log(vocale("x"));
console.log(vocale("b"));
console.log(vocale("u"));

console.log();

/*Scrivere la funzione patente, che ha tre parametri nel seguente ordine: (anniMin, anniMax, eta):
anniMin descrive a quanti anni si prende la patente nello stato in cui vive, anniMax qual è l’età
massima per possedere una patente e eta quanti anni l’utente ha attualmente.
La funzione confronta i tre numeri e se l’età dell’utente è compatibile con l’età minima e con l’età
massima, restituisce true, false altrimenti.
Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.
Si invochi la funzione precedentemente definita, passando come parametri i seguenti valori:
(17,99,18), (18,70,71), (16,75,46). Si stampi l’output per ciascuna invocazione della funzione.*/

console.log("ESERCIZIO 4.7 \n");

function patente(anniMin,anniMax,eta){
  if(eta <= anniMax && eta >= anniMin)
    return true;
  else
    return false;
}

console.log(patente(17,99,18));
console.log(patente(18,70,71));
console.log(patente(16,75,46));

console.log();

/*Scrivere una funzione con tre parametri numerici x, y e z. La funzione deve controllare se i tre
parametri sono in ordine crescente. Se i parametri sono ordinati la funzione restituisce la stringa
“Parametri ordinati”, e “Parametri non ordinati” altrimenti.
Si invochi la funzione precedentemente definita, passando come parametri i seguenti valori: (3, 6,
10), (4.5, 9, 5), (30, 6, 10), (11, 11, 15). Si stampi l’output per ciascuna invocazione della funzione.*/

console.log("ESERCIZIO 4.8 \n");

function par(x,y,z){
  if(z > y && y > x)
    return "Parametri Ordinati";
  else
    return "Parametri non Ordinati";
}

console.log(par(3,6,10));
console.log(par(4.5,9,5));
console.log(par(30,6,10));
console.log(par(11,11,15));

console.log();

/*Scrivere una funzione che abbia due parametri numerici, x e y. La funzione deve calcolare e restituire
in output la divisione di x per y (se x è divisibile per y), altrimenti la divisione di x per y arrotondando
per eccesso.
Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.
Si scriva quindi un frammento di programma che invoca la funzione precedentemente definita con le
seguenti coppie di parametri: (16, 4), (23, 3), (2, 18). Si stampino i risultati ottenuti*/

console.log("ESERCIZIO 4.9 \n");

function par2(x,y){
  if(x % y == 0)
    return x/y;
  else (x % y != 0)
    return Math.ceil(x / y);
}

console.log(par2(16,4));
console.log(par2(23,3));
console.log(par2(2,18));

console.log();

/*Una progressione aritmetica è una successione di numeri in cui la differenza tra ciascun elemento
della successione e il suo precedente è una costante.
Un esempio di progressione aritmetica è: 3, 5, 7, 9, 11 (la costante è 2). La successione 3, 8, 9, 17, 20
non è una progressione aritmetica perché la differenza non è costante.
Scrivere una funzione con tre parametri numerici x, y e z. La funzione deve controllare se i tre
parametri sono in una progressione aritmetica. Se la condizione è verificata, la funzione restituisce la
stringa “Progressione”, e “Non progressione” altrimenti.
Si scriva quindi un frammento di programma che invochi la funzione precedentemente definita,
passando come parametri le seguenti coppie di valori: (2, 10, 14), (7, 9, 11), (1, 4, 7). Si stampi
l’output per ciascuna invocazione della funzione. */

console.log("ESERCIZIO 4.10 \n");

function prog_arit(x,y,z){
  if((z - y) == (y - x))
   return "Progressione";
  else
    return "Non Progressione";
}

console.log(prog_arit(2,10,14));
console.log(prog_arit(7,9,11));
console.log(prog_arit(1,4,7));

console.log();

/*Svolgere nuovamente l’intero esercizio al punto 4.5, ma considerando tra i possibili tipi di triangolo
anche il triangolo rettangolo. Si invochi la nuova funzione definita in questo esercizio con gli stessi
valori dei parametri indicati nell’esercizio 4.5 e si stampi il risultato ottenuto.*/

console.log("ESERCIZIO 4.11 \n");

function tipo_triangolo(a,b,c){
  if(a == b && b == c)
    return "Triangolo Equilatero";
  else if(a == b || b == c || a == c)
    return "Triangolo Isoscele";
  else if((Math.pow(Math.max(a,b,c),2)) == b**2 + c**2 || (Math.pow(Math.max(a,b,c),2)) == a**2 + c**2 || (Math.pow(Math.max(a,b,c),2)) == b**2 + a**2)
    return "Triangolo Rettangolo";
  else
    return "Triangolo Scaleno";
}

console.log(tipo_triangolo(3,3,3));
console.log(tipo_triangolo(12,10,10));
console.log(tipo_triangolo(3,4,5));
console.log(tipo_triangolo(2,5,1));

console.log();

/*Si scriva una funzione con 4 parametri inizio1, fine1, inizio2, fine2 che rappresentano le ore di inizio
e fine di 2 appuntamenti (es inizio1=9, fine1=11, inizio2=10, fine2=12). La funzione deve calcolare
true se i due appuntamenti si sovrappongono e false altrimenti. Si assuma che i valori dei parametri
rappresentino delle ore corrette e gli appuntamenti siano nell’arco delle 24 ore. Sotto questa ipotesi,
la condizione di sovrapposizione è che l’appuntamento che inizia più tardi termini dopo
dell’appuntamento che finisce più presto.
Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.
Si scriva un programma che invochi la funzione definita al punto precedente e stampi in output la
stringa “Appuntamenti sovrapposti”, oppure “Appuntamenti non sovrapposti”, in accordo al valore
calcolato dalla funzione. Nelle invocazioni della funzione, si considerino i seguenti valori per i
parametri: (9,11,10,12), (9,12,10,11), (9,11,12,13)*/

console.log("ESERCIZIO 4.12 \n");

function fine_inizio(inizio1,fine1,inizio2,fine2){
  if(fine1 > inizio1 && fine2 > inizio2 && inizio2 >= fine1) //si considerano gli appuntamenti NON SOVRAPPOSTI anche nel caso in cui fine1 e inizio2 coincidono.
    return "Appuntamenti non Sovrapposti";
  else
    return "Appuntamenti Sovrapposti"
}

console.log(fine_inizio(9,11,10,12));
console.log(fine_inizio(9,12,10,11));
console.log(fine_inizio(9,11,12,13));

console.log();

/*Scrivere una funzione con due parametri che rappresentano le coordinate di una casella in una
scacchiera, ad es. (d, 7). La funzione calcola (e restituisce in output) true se la casella corrispondente
sulla scacchiera è bianca, e false altrimenti (cioè, se la casella corrispondente sulla scacchiera è nera).
Nota: la funzione deve restituire il valore calcolato, non deve stampare il risultato.
Si scriva quindi un programma che invochi la funzione precedentemente definita, passando come
parametri le seguenti coppie di valori: (d, 7), (g,1), (a, 1), (h, 6). Si stampi in output (per ciascuna invocazione della funzione) stringa “Bianco” o “Nero”, in accordo al valore restituito dalla funzione*/

console.log("ESERCIZIO 4.13 \n");

function scacchiera(s,t){
  if((s == 'a' || s == 'c' || s == 'e' || s == 'g') && (t % 2 != 0) || (s == 'b' || s == 'd' || s == 'f' || s == 'h') && (t % 2 == 0))
    return "Nero";
  else
    return "Bianco";
}

console.log(scacchiera('d',7));
console.log(scacchiera('g',1));
console.log(scacchiera('a',1));
console.log(scacchiera('h',6));

console.log();

//((s == 'a' && t % 2 == 0 || t == 1) || (s == 'c' && t % 2 == 0 || t == 1) || (s == 'e' && t % 2 == 0 || t == 1) || (s == 'g' && t % 2 == 0 || t == 1))

 //|| (s = 'b' && t % 2 != 0) || (s == 'd' && t % 2 != 0) || (s == 'f' && t % 2 != 0) || (s == 'h' && t % 2 != 0))
