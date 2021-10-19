console.log("Esercizio 12.1");
function somma_matrici(A,B){
  var r = A.length;
  var c = A[0].length;
  var C = new Array(r);
  var i,j;
  for (i = 0;i<r;i++){
    C[i] = new Array(c);
    for (j = 0;j<c;j++)
      C[i][j] = A[i][j]+B[i][j];
  }
  return C;
}
var kiwi = [[3, 4, 5], [1, 2, 3], [6, 7, 8]];
var banana = [[1, 5, 7], [3, 11, 13], [9, 10, 3]];
console.log(somma_matrici(kiwi,banana));
console.log("\n");
//
console.log("Esercizio 12.2");
function prodotto_matrici(A,B){
// Assumiamo A di tipo M x N
// Assumiamo B di tipo N x P
  var M = A.length;
  var N = A[0].length;
  var P = B[0].length;
// C = A x B e' di tipo M x P
  var C = new Array(M);
  var i,j,k;
  var sommaP;
  for (i = 0;i<M;i++){
    C[i] = new Array(P);
    for (j = 0;j<P;j++){
//calcolo il prodotto della riga i per la colonna j
      sommaP = 0;
      for(k = 0;k<N;k++)
        sommaP +=A[i][k]*B[k][j];
        C[i][j] = sommaP;
      }
  }
  return C;
}
var mango = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
var pera = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
console.log(prodotto_matrici(mango,pera));
console.log("\n");
//
console.log("Esercizio 12.3");
function prodotto_n(A,n){
  var M = A.length;
  var P = new Array(M);
  var i, j, k, l;
  var sommaP;
  if (n == 1)
    return A;
  else if (n == 2){
    for (i = 0; i < M; i++){
      P[i] = new Array(M);
      for (j = 0; j < M; j++){
        sommaP = 0;
        for (k = 0; k < M; k++)
          sommaP = sommaP + A[i][k]*A[k][j];
          P[i][j] = sommaP;
      }
    }
    return P;
  }
  else
  return prodotto_matrici(A,prodotto_n(A, n - 1));
}
console.log(prodotto_n(mango,3));
console.log("\n");
//
console.log("Esercizio 12.4");
function massimo(A){
  var r = A.length
  var i,j;
  var max = new Array(r);
  for (i = 0; i < r; i++){
    max[i] = - (Infinity);
    for (j = 0; j < A[i].length; j++){
      if (A[i][j] > max[i])
        max[i] = A[i][j]; 
    }
  }
  return max;
}
console.log(massimo(mango));
console.log(massimo(banana));
console.log(massimo(kiwi));
console.log("\n");
//
console.log("Esercizio 12.5");
function minimo(A){
  var r = A.length
  var i,j;
  var min = new Array(r);
  for (i = 0; i < r; i++){
    min[i] = Infinity;
    for (j = 0; j < A[i].length; j++){
      if (A[i][j] < min[i])
        min[i] = A[i][j]; 
    }
  }
  return min;
}
console.log(minimo(mango));
console.log(minimo(banana));
console.log(minimo(kiwi));
console.log("\n");
//
console.log("Esercizio 12.6");
function media_righe(A){
  var l = A.length;
  var i, j;
  var media = new Array(l);
  var med;
  for (i = 0; i < A.length; i++){
    med = 0;
    for (j = 0; j < A[i].length; j++)
      med +=  A[i][j];
    media[i] = med / A[i].length;
  }
  return media;
}
var G = [[1, 3, 2], [4, 8, 0]];
console.log(media_righe(G));
console.log("\n");
//
console.log("Esercizio 12.7");
function diagonale_principale(A){
  var i;
  var diagonale = new Array(A.length);
  for (i = 0; i < A.length; i++)
    diagonale[i] = A[i][i];
  return diagonale;
}
var Y = [[3, 5, 7, 6, 3], [6, 8, 2, 1, 3], [6, 8, 3, 2, 1]];
console.log(diagonale_principale(Y));
console.log("\n");
//
console.log("Esercizio 12.8");
function prodotto_vettore(A,x){
  var M = A.length;
  var N = A[0].length;
  var i, j;
  var sommax;
  var prodotto = new Array(M);
  if (N != x.length){
    console.log("NaN");
  }
  else{
    for (i = 0; i < M; i++){
      sommax = 0;
      for (j = 0; j < N; j++)
        sommax += A[i][j]*x[j];
      prodotto[i] = sommax;
    }
    return prodotto;
  }
}
var K = [[9, 7, 5], [6, 5, 4], [2, 1, 1], [3, 2, 4]];
var o = [1, 2, 3, 4];
var p = [1, 2, 3];
console.log(prodotto_vettore(K,o));
console.log(prodotto_vettore(K,p));
console.log("\n");
//
console.log("Esercizio 12.9");
console.log("\n");
//
console.log("Esercizio 12.10");
function stampaDataBreve(g){
  var d = g;
  var stampa = "";
  switch (d["mese"]){
    case "gennaio":
    d["mese"] = "0" + 1;
    break;
    case "febbraio":
    d["mese"] = "0" + 2;
    break;
    case "marzo":
    d["mese"] = "0" + 3;
    break;
    case "aprile":
    d["mese"] = "0" + 4;
    break;
    case "maggio":
    d["mese"] = "0" + 5;
    break;
    case "giugno":
    d["mese"] = "0" + 6;
    break;
    case "luglio":
    d["mese"] = "0" + 7;
    break;
    case "agosto":
    d["mese"] = "0" + 8;
    break;
    case "settembre":
    d["mese"] = "0" + 9;
    break;
    case "ottobre":
    d["mese"] = 10;
    break;
    case "novembre":
    d["mese"] = 11;
    break;
    case "dicembre":
    d["mese"] = 12;
    break;
    default:
    console.log("Not a month");
  }
  console.log(d["giorno"] + "/" + d["mese"] + "/" + d["anno"]);
}
var l = {"giorno": 14, "mese": "dicembre", "anno": 2020};
stampaDataBreve(l);
var f = {"giorno": 14, "mese": "marzo", "anno": 1985};
stampaDataBreve(f);
console.log("\n");
//
console.log("Esercizio 12.11");
function printData(g){
  var d = g;
  var stampa = "";
  switch (d["mese"]){
    case "gennaio":
    d["mese"] = "0" + 1;
    break;
    case "febbraio":
    d["mese"] = "0" + 2;
    break;
    case "marzo":
    d["mese"] = "0" + 3;
    break;
    case "aprile":
    d["mese"] = "0" + 4;
    break;
    case "maggio":
    d["mese"] = "0" + 5;
    break;
    case "giugno":
    d["mese"] = "0" + 6;
    break;
    case "luglio":
    d["mese"] = "0" + 7;
    break;
    case "agosto":
    d["mese"] = "0" + 8;
    break;
    case "settembre":
    d["mese"] = "0" + 9;
    break;
    case "ottobre":
    d["mese"] = 10;
    break;
    case "novembre":
    d["mese"] = 11;
    break;
    case "dicembre":
    d["mese"] = 12;
    break;
    default:
    console.log("Not a month");
  }
  console.log(d["mese"] + "/" + d["giorno"] + "/" + d["anno"]);
}
printData(l);
printData(f);
