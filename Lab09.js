console.log("Esercizio 9.1");
function BabboNatale(regali,giorni_feriali,giorni_festivi){
  var regali_restanti = regali - (giorni_feriali*5 + giorni_festivi*2);
  var folletti_necessari = 0;
  var giorni_totali = giorni_feriali + giorni_festivi;
  var regali_giornalieri_folletti = regali_restanti / giorni_totali;
  for (i = 7; i > regali_giornalieri_folletti; i = i + 7){
    folletti_necessari = folletti_necessari + 1;
  }
  return folletti_necessari;
}
console.log("\n");
//
console.log("Esercizio 9.2");
function secondiCapodanno(s){
  if (s > 60)
    console.log("Mancano troppi secondi a Capodanno");
  else if (s == 1){
        console.log(s);
        }
       else{
        console.log(s);
        secondiCapodanno(s-1);
       }
}
secondiCapodanno(15);
console.log("\n");
//
console.log("Esercizio 9.3");
/*Scrivere una funzione ricorsiva avente due parametri n e m, entrambi numeri interi. La funzione restituisce il prodotto dei numeri pari da n a m (eventualmente estremi compresi).
Scrivere un frammento di programma che stampi il risultato ottenuto richiamando la funzione con le seguenti coppie di parametri (3,8) e (6,9)
*/
function prodotto_compresi(n,m){
  if (n > m)
    return 1;
  else{
    if (n%2==0)
    return n * prodotto_compresi(n + 2,m);
  else
    return (n + 1) * prodotto_compresi(n + 3,m);
  }
}
console.log(prodotto_compresi(1,5));
console.log("\n");
//
console.log("Esercizio 9.4");
function quantibit(n){
  var quanti;
  if (n < 2)
    return 1;
  else{
    quanti = 1 + quantibit(n/2);
  }
  return quanti;
}
console.log(quantibit(128));
console.log("\n");
//
console.log("Esercizio 9.5");
function successivi7(n){
  var somma = 0;
  if (n%7 == 0)
    return 0;
  else
  somma = n + (successivi7(n + 1));
  return somma;
}
console.log(successivi7(4));
console.log(successivi7(2));
console.log(successivi7(5));
console.log(successivi7(8));
console.log("\n");
//
console.log("Esercizio 9.6");
function paricompresi(n,m){
  if (n > m)
    return 1;
  else if (n%2 == 0)
    return n * paricompresi(n + 2, m);
    else
    return (n + 1) * paricompresi(n + 3,m);
}
console.log(paricompresi(3,8));
console.log(paricompresi(6,9));
console.log("\n");
//
console.log("Esercizio 9.7");
function quoziente(x,y){
  if (x < y)
    return 0;
  else
    return 1 + quoziente(x - y,y);
}
console.log(quoziente(7,3));
