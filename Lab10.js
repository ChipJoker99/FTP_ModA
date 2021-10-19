console.log("Esercizio 10.1");
function occorrenza(A,x){
  var occorrenze = 0;
  for (i = 0; i < A.length; i++){
    if (A[i] == x)
      occorrenze++;
  }
  return occorrenze;
}
var vettore = [16, 5, 9, 5, 4, 9, 5, 9];
console.log(occorrenza(vettore,9));
console.log(occorrenza(vettore,5));
console.log(occorrenza(vettore,16));
console.log("\n");
//
console.log("Esercizio 10.2");
function somma_pari(A){
  var somma = 0;
  for (i = 0; i < A.length; i++){
    if (A[i] % 2 == 0)
      somma = somma + A[i];
  }
  return somma;
}
var victoria = [2, 3, 7, 9, 4, 6, 12, 13];
console.log(somma_pari(victoria));
console.log("\n");
//
console.log("Esercizio 10.3");
function somma_maggiore(A,x){
  var somma = 0;
  for (i = 0; i < A.length; i++){
    if (A[i] > x)
      somma = somma + A[i];
  }
  return somma;
}
var francesca = [2, 5, 6, 8, 1, 3, 4];
console.log(somma_maggiore(francesca,4));
console.log(somma_maggiore(francesca,5));
console.log("\n");
//
console.log("Esercizio 10.4");
function media_compresi(A,x,y){
  var somma = 0;
  var media = 0;
  var contatore = 0;
  for (i = 0; i < A.length; i++){
    if ((A[i] > x) && (A[i] < y)){
      somma = somma + A[i];
      contatore ++;
    }
  }
  media = somma / contatore;
  return media;
}
var aldo = [6, 8, 15, 89, 65, 41, 23];
console.log(media_compresi(aldo,20,70));
console.log(media_compresi(aldo,5,30));
console.log("\n");
//
console.log("Esercizio 10.5");
function somma_confronto(A,x){
  var somma = 0;
  var verificato;
  for (i = 0; i < A.length; i = i + 2){
    somma = somma + A[i];
  }
  if (somma > x)
    return true;
  else
   return false;
}
var mattia = [12, 63, 85, 14, 7, 2, 67, 5];
console.log(somma_confronto(mattia,100));
console.log(somma_confronto(mattia,4000));
console.log("\n");
//
console.log("Esercizio 10.6");
function somma_confronto(A,B){
  var sommaA = 0;
  var sommaB = 0;
  for (i = 0; i < A.length; i = i + 2){
    sommaA = sommaA + A[i];
  }
  for (i = 1; i < B.length; i = i + 2)
    sommaB = sommaB + B[i];
  return (sommaA > sommaB);
}
var alessio = [5, 6, 1, 7, 12, 16, 24];
var gisella = [6, 3, 9, 15, 17, 16, 21];
console.log(somma_confronto(alessio,gisella));
console.log(somma_confronto(gisella,alessio));
console.log("\n");
//
console.log("Esercizio 10.7")
function somma_coppie(A,k){
  var somma = 0;
  var verificato;
  for (i = 0; i < A.length; i = i + 2){
    somma = A[i] + A[i + 1];
    if (somma != k){
      verificato = false;
      break;
    }
    else
      verificato = true;
  }
  return verificato;
}
var maurizio = [2, 3, 4, 1, 5, 0];
console.log(somma_coppie(maurizio,4));
console.log(somma_coppie(maurizio,5));
console.log("\n");
//
console.log("Esercizio 10.8");
function occorrenza_consecutivi(A,x,y){
  var verificato = false;
  for (i = 0; i < A.length; i++){
    if ((A[i] == x) && (A[i + 1] == y))
      verificato = true;
    else if ((A[i] == x) && (A[i + 1] != y))
      verificato = false;
  }
return verificato;
}
var giovanni = [1, 3, 0, 12, 7, 3, 0];
var luca = [1, 5, 6, 5, 6, 5, 8, 5];
console.log(occorrenza_consecutivi(giovanni,3,0));
console.log(occorrenza_consecutivi(luca,5,6));
console.log(occorrenza_consecutivi(luca,6,5));
console.log("\n");
//
console.log("Esercizio 10.9");
function crescenti(A){
  var verificato = true;
  for (i = 0; i < A.length; i++){
    if (A[i] > A[i + 1])
      verificato = false;
  }
  return verificato;
}
var antonio = [0, 3, 6, 7, 10, 98];
var giuseppe = [6, 7, 9, 4];
console.log(crescenti(antonio));
console.log(crescenti(giuseppe));
console.log("\n");
//
console.log("Esercizio 10.10");
function array_dispari(A){
  var B = [];
  for (i = 0; i < A.length; i++)
    if (A[i]%2 != 0)
      B[B.length] = A[i];
  return B;
}
var giorgio = [0, 5, 8, 9, 12, 3];
console.log(array_dispari(giorgio));
console.log("\n");
//
console.log("Esercizio 10.11");
function array_invertito(A){
  var B = new Array(A.length);
  for (i = 0; i < A.length; i++)
    B[i] = A[A.length - 1 - i];
  return B;
}
var zoe = [0, 10, 23, 45, 67];
var lisa = [2, 6, 7, 98, 12, 64, 32, 11, 8];
console.log(array_invertito(zoe));
console.log(array_invertito(lisa));
console.log("\n");
//
console.log("Esercizio 10.12");
function array_maggiori(A,B){
  var C = new Array(A.length);
  for (i = 0; i < A.length; i++)
    C[i] = Math.max(A[i],B[i]);
  return C;
}
var marco = [9, 8, 4, 5, 6];
var alessandra = [3, 54, 6, 2, 1];
console.log(array_maggiori(marco,alessandra));
console.log("\n");
console.log("Fine esercitazione.");
