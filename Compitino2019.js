console.log("Esercizio 1 \n");

function prezzo_biglietto(f,p){
  var prezzo;
  if(f >= 'E')
   return prezzo = 15;
  else if(p <= 4 || p >= 10)
   return prezzo = 25;
  else
   return prezzo = 50;

  return prezzo;
}

function prezzo_biglietto_sabato(f,p,e){
  var prezzo = prezzo_biglietto(f,p);
  if(e < 30 || e > 60)
  prezzo = prezzo / 2;

  return prezzo;
}

console.log(prezzo_biglietto('A',1));
console.log(prezzo_biglietto('D',7));
console.log(prezzo_biglietto('C',12));
console.log(prezzo_biglietto('I',1));
console.log();
console.log(prezzo_biglietto_sabato('D',1,29));
console.log(prezzo_biglietto_sabato('A',7,65));
console.log(prezzo_biglietto_sabato('A',1,50));
console.log(prezzo_biglietto_sabato('E',1,12));
console.log();

console.log("Esercizio 2 \n");

function esercizio2(n,m){
  var somma = 0 ;

  var i;
  for (i = 2; i <= m; i=i+2){
    somma += n**i
  }
  return somma;
}

console.log(esercizio2(2,9));
console.log();

console.log("Esercizio 3 \n");

function compitino(a,b){
  var x = 2;
  var i;
  // (B)

  for (i = 1; i <= b; i ++){
    //(C) -> tutte le volte necessarie
    x = x + a;
  }
  // (D)
  return x;
}

//corpo del programma
var x = 3;
var y = 1;
// (A)
risultato = compitino(y,x);
// (E)

