console.log("Esercizio 11.1");
function ord_crescente(A){
  var ordine = "";
  for (i = 0; i < A.length; i++)
    if (A[i]>A[i + 1]){
      ordine = "Array non ordinato in senso crescente";
      break;
    }
    else
      ordine = "Array ordinato in senso crescente";
  return ordine;
}
var A = [0,1,2,5,78,110];
var B = [3,5,7,4];
console.log(ord_crescente(A));
console.log(ord_crescente(B));
console.log("\n");
//
console.log("Esercizio 11.2");
function controlla(A){
  var controllo = false;
  for (i = 0; i < A.length; i++){
    if (A[i] == A[i-1] + A[i+1]){
      controllo = true;
      break;
    }
  }
  return controllo;
}
var lupo = [1, 2, 4, 6, 7];
var agnello = [3, 5, 2, 9, 7];
console.log(controlla(lupo));
console.log(controlla(agnello));
console.log("\n");
//
console.log("Esercizio 11.3");
function reverse(A){
  var B = new Array(A.length);
  for (i = 0; i < A.length; i++)
    B[i] = A[A.length - 1 - i];
  for (i = 0; i < A.length; i++)
    A[i] = B[i];
}
var capra = [0, 4, 5, 9, 11];
console.log(capra);
reverse(capra);
console.log(capra);
console.log("\n");
//
console.log("Esercizio 11.4");
function prodotto_scalare(X,Y){
  var somma = 0;
  for (i = 0; i < X.length; i++)
    somma = somma + X[i]*Y[i];
  return somma;
}
var gatto = [1, 5, 6, 7, 10];
var topo = [2, 4, 12, 31, 11];
console.log(prodotto_scalare(gatto,topo));
console.log("\n");
//
/*console.log("Esercizio 11.5");
function convertitorebase2(B){
  var base10 = 0;
  for (i = 0; i < B.length; i++)
    base10 = base10 + B[i]*Math.pow(2,B.length - 1 - i);
  return base10;
}
var numero = prompt("Inserisci un numero binario da convertire:");
console.log("Il numero binario inserito in base 10 vale: " + convertitorebase2(numero));
console.log("\n");*/
//
console.log("Esercizio 11.6");
function ordina_decrescente(A){
  var i, j, temp;
  for (i = 0; i < A.length - 1; i++)
    for (j = A.length; j > i; j--){
      if (A[j] > A[j - 1]){
        temp = A[j];
        A[j] = A[j - 1];
        A[j - 1] = temp;
      }
    }
}
var koala = [2, 5, 7, 98, 32];
console.log(koala);
ordina_decrescente(koala);
console.log(koala);
console.log("\n");
//
console.log("Esercizio 11.7");
function elementi0(A){
  var i;
  var B = [];
  for (i = 0; i < A.length; i++)
    if (A[i] == 0)
      B.push(i);
  return B;
}
var panda = [0, 9, 45, 0, 4, 0];
console.log(elementi0(panda));
console.log("\n");
//
console.log("Esercizio 11.8");
function vocali(S){
  var i;
  var vowel = [];
  for (i = 0; i < S.length; i++){
    if ((S[i] == "a") || (S[i] == "e") || (S[i] == "i") || (S[i] == "o") || (S[i] == "u"))
      vowel.push(i);
  }
  return vowel;
}
console.log(vocali("borbico"));
console.log(vocali("borbacchino"));
console.log("\n");
//
console.log("Esercizio 11.9");
function posizioni(S,I){
  var i;
  var char = "";
  for (i = 0; i < I.length; i++)
    char = char + S[I[i]];
  return char;
}
var scimmia = "Navacchio";
var orso = [2, 5, 3];
console.log(posizioni(scimmia,orso));
console.log("\n");
console.log("Fine esercitazione.");
