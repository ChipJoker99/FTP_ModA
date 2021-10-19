console.log("ESERICIZIO 6.1");

function numeri_pari(n){
  var somma = 0; //somma all'inizio vale 0
  var i; //definisco var. contatore che mi terrà i limiti
    for(i = 0; i <= n; i = i + 2){ //metto che i valori saranno tra 0 e n - ogni volta quindi incremento di 2 per fare sempre pari (0,2,4,6,8...)
    somma = somma + i; //aggiorno i valori della somma
  }
  return somma; //ho il nuovo valore somma con i risultati che andrò ad indicare
}

console.log(numeri_pari(4)); //la somma dei numeri pari tra 0 e 4 (0+2+4 = 6)
console.log(numeri_pari(10)); //la somma dei numeri pari tra 0 e 10 (0+2+4+6+8+10 = 30)
console.log(numeri_pari(50)); //la somma dei numeri pari tra 0 e 50 (0+2+4+6+8+10+12+14+16+18+20+22+24+26+28+30+32+34+36+38+40+42+44+46+48+50 = 650)

console.log("\nESERCIZIO 6.2");

function numeri_primi(x,y,n){
  var prodotto = 1;
  var i;
  var contatore = 0;

  if(x % 2 == 0 && n > 0)
    x = x + 1;

    for(i = x; i <= y; i = i + 2){
      if(contatore<n)
			  prodotto*=i;
            contatore++;
    }
    return prodotto;
}

console.log(numeri_primi(0,10,4));//105
console.log(numeri_primi(23,51,3));//15.525
console.log(numeri_primi(30,39,5));//51.666.615

console.log("\nESERCIZIO 6.3");

