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

console.log("\nEsercizio 6.3");

function min_random(n){
  var i, j, minimo = 1;
  for (i = 1; i <= n; i = i + 1)
    j = Math.random()
    if (j < minimo)
    minimo = j;
  return minimo;
}
console.log(min_random(3));
console.log(min_random(12));
console.log(min_random(100));
console.log(min_random(4));

console.log("\n");

console.log("\nEsercizio 6.4");

function max_random(n){
  var i, j, massimo = 0;
  for (i = 1; i <= n; i = i + 1)
    j = Math.random()
    if (j > massimo)
    massimo = j;
  return massimo;
}
console.log(max_random(3));
console.log(max_random(12));
console.log(max_random(100));
console.log(max_random(4));

console.log("\n");

console.log("\nEsercizio 6.5");

function triangolo(n){
  var riga = "";
  for (i = 1; i <= n; i++){
    for (j = 1; j <= i; j++){
      riga = riga + "*";
    }
    console.log(riga);
    riga = "";
  }
  return;
}

triangolo(3);
triangolo(1);
console.log(triangolo(6));
console.log(triangolo(8));

console.log("\nEsercizio 6.6");

function espressione(n,x){
  var risult=0;
  var passaggio;
  var i;
  for(i=0;i<n;i++){
    passaggio=Math.pow(x,i);
    risult=risult+passaggio;
  }
return risult;
}

var apice;
var base;
var polinomio;

base=1.1;
apice=3;
console.log("Il nominatore è di : "+base);
console.log("La base è di : "+apice);
polinomio=espressione(apice,base);
console.log("Il risultato del polinomio è : "+polinomio);
console.log("\n");

base=4;
apice=7;
console.log("Il nominatore è di : "+base);
console.log("La base è di : "+apice);
polinomio=espressione(apice,base);
console.log("Il risultato del polinomio è : "+polinomio);
console.log("\n");

base=0.1;
apice=11;
console.log("Il nominatore è di : "+base);
console.log("La base è di : "+apice);
polinomio=espressione(apice,base);
console.log("Il risultato del polinomio è : "+polinomio);
console.log("\n");

console.log("\nEsercizio 6.7");

function fattoriale(n){
  var pass=1;
  var i;
  for(i=1;i<=n;i++){
    pass=pass*i;
  }
  return pass;
}

console.log("\n");
var posti;
var fatto;

posti=5;
console.log("Si calcola il fattoriale del numero "+posti);
fatto=fattoriale(posti);
console.log("Il fattoriale di "+posti+" è di "+fatto);
console.log("\n");

posti=10;
console.log("Si calcola il fattoriale del numero "+posti);
fatto=fattoriale(posti);
console.log("Il fattoriale di "+posti+" è di "+fatto);
console.log("\n");

posti=8;
console.log("Si calcola il fattoriale del numero "+posti);
fatto=fattoriale(posti);
console.log("Il fattoriale di "+posti+" è di "+fatto);

console.log("\n");
posti=6;
console.log("Si calcola il fattoriale del numero "+posti);
fatto=fattoriale(posti);
console.log("Il fattoriale di "+posti+" è di "+fatto);

console.log("\nEsercizio 6.8");

function tabellina(n){
  let i;
  let tab=0;
  for(i=1;i<=11;i++){
      console.log(tab);
      tab=tab+n;

  }
}

var param;
var per;

param=3;
console.log("Si vuole calcolare la tabellina di : "+param);
console.log("\n");
console.log("I risultati della tabellina sono : ")
tabellina(param);
console.log("\n");

param=8;

console.log("Si vuole calcolare la tabellina di : "+param);
console.log("\n");
console.log("I risultati della tabellina sono : ")
tabellina(param);
console.log("\n");

param=12;
console.log("Si vuole calcolare la tabellina di : "+param);
console.log("\n");
console.log("I risultati della tabellina sono : ")
tabellina(param);
console.log("\n");

console.log("\nEsercizio 6.9");

function disegno(n){
  var casella;
  var quad=0;
  var fin="";
  var j;
  for(j=1;j<=n;j++){
    if(j%10==0){
      quad=j;
      fin=fin+" "+new String(quad)+"\n";

    }else{
    quad=j;
    fin=fin+" "+new String(quad);
    fin=fin+"   ";
    }
 
  }
  return fin;

}

var dis;
var no;

no=6;
console.log("Contiamo da 1 a "+no);
dis=disegno(no);
console.log("Ecco il risultato : ");
console.log(dis);

no=23;
console.log("Contiamo da 1 a "+no);
dis=disegno(no);
console.log("Ecco il risultato : ");
console.log(dis);

no=40;
console.log("Contiamo da 1 a "+no);
dis=disegno(no);
console.log("Ecco il risultato : ");
console.log(dis);

console.log("\nEsercizio 6.10");

function somma1(){
  var cont,conta;
  var som1=0,som2=30,rest=0;
  for(cont=1;cont<=10;cont++){
    som1=som1+Math.pow(cont,2);
  }
  for(conta=1;conta<=5;conta++){
    rest=rest+som2;
    som2=som2-(2*conta);
  }
  rest=2*rest;
  rest=rest+som1;
  return rest;
}
function somma2(){
  var y;
  var res1=0,res2=0,resUlty;
  for(y=1;y<=10;y++){
    res1=res1+(5*y);
    res2=res2+(6*y);
  }
  resUlty=res1+res2;
  resUlty=2*resUlty;
  return resUlty;
}

var add1,add2;

add1=somma1();
console.log("Il risultato della figura 1 è : "+add1);

add2=somma2();
console.log("Il risultato della figura 2 è : "+add2);

console.log("\nEsercizio 6.11");

function mediaCasuali(n){
var media=0;
var namero;
var min=-0.5,max=0.5;
let k;
  for(k=1;k<=n;k++){
    namero=Math.random()*(max-min)+min;
    //console.log("E' stato generato il numero "+namero+" alla posizione "+k);
    media=media+namero;
  }
  media=media/n;
  return media;

}

var nam;
var aritmedia;

console.log("\n");
nam=3;
console.log("Il numero inserito è : "+nam);
console.log("\n");
aritmedia=mediaCasuali(nam);
console.log("La media dei numeri generati è : "+aritmedia);

console.log("\n");
nam=12;
console.log("Il numero inserito è : "+nam);
console.log("\n");
aritmedia=mediaCasuali(nam);
console.log("La media dei numeri generati è : "+aritmedia);
console.log("\n");

nam=100;
console.log("Il numero inserito è : "+nam);
console.log("\n");
aritmedia=mediaCasuali(nam);
console.log("La media dei numeri generati è : "+aritmedia);
console.log("\n");

nam=4;
console.log("Il numero inserito è : "+nam);
console.log("\n");
aritmedia=mediaCasuali(nam);
console.log("La media dei numeri generati è : "+aritmedia);
console.log("\n");

console.log("\nEsercizio 6.12");

function fibonacci(n){
  var fibo;
  var n1=0,n2=1;
  let i;
  for(i=1;i<=n;i++){
    fibo=n1+n2;
    n1=n2;
    n2=fibo;

  }
  return fibo;

}

var nfibo;
var fibona;

nfibo=2;
console.log("Si vuole stampare il fibonacci alla "+nfibo+"° posizione");
fibona=fibonacci(nfibo);
console.log("\n");
console.log("Il numero corrispondente è : "+fibona);
console.log("\n");

nfibo=7;
console.log("Si vuole stampare il fibonacci alla "+nfibo+"° posizione");
fibona=fibonacci(nfibo);
console.log("\n");
console.log("Il numero corrispondente è : "+fibona);
console.log("\n");

nfibo=11;
console.log("Si vuole stampare il fibonacci alla "+nfibo+"° posizione");
fibona=fibonacci(nfibo);
console.log("\n");
console.log("Il numero corrispondente è : "+fibona);
console.log("\n");

nfibo=26;
console.log("Si vuole stampare il fibonacci alla "+nfibo+"° posizione");
fibona=fibonacci(nfibo);
console.log("\n");
console.log("Il numero corrispondente è : "+fibona);
console.log("\n");
