console.log("Esercizio 7.1");
function somma_n(n){
  var somma = 0;
  var quanti = 0;
  while (somma <= n){
    somma = somma + Math.random();
    quanti++;
  }
  return quanti;
}
console.log("Ci sono voluti " + somma_n(3) + " tentativi.");
console.log("Ci sono voluti " + somma_n(8) + " tentativi.");
console.log("\n");
//
console.log("Esercizio 7.2");
function compreso(a,b){
  var numero = 0;
  do  numero = Math.random();
  while ((numero < a) || (numero > b))
  return numero;
}
console.log(compreso(0.3,0.6));
console.log(compreso(0.1,0.2));
console.log("\n");
//
console.log("Esercizio 7.3");
function somma_half(n){
  var somma = 0;
  var r, i = 0;
  while (i <= n){
    r = Math.random();
    if (r > 0.5){
      somma =  somma + r;
      i++;
    }
  }
  return somma;
}
console.log(somma_half(6));
console.log("\n");
//
console.log("Esercizio 7.4");
function numero_primo(n){
  var primo = true;
  for (i = 2; i < n; i++){
    if (n % i == 0){
      primo = false;
      break;
    }
  }
  return primo;
}
console.log("12 è un numero primo? " + numero_primo(12));
console.log("3 è un numero primo? " + numero_primo(3));
console.log("11 è un numero primo? " + numero_primo(11));
console.log("673 è un numero primo? " + numero_primo(673));
console.log("29 è un numero primo? " + numero_primo(29));
console.log("\n");
//
console.log("Esercizio 7.5");
function divisibile_m(n,m){
  var divisibile = true;
  for (i = 1; i < m; i++){
    if (n % i != 0){
      divisibile = false;
      break;
    }
  }
  return divisibile;
}
console.log(divisibile_m(10,2));
console.log(divisibile_m(5,3));
console.log(divisibile_m(12,4));
console.log("\n");
//
console.log("Esercizio 7.6");
function random_intero(n){
  var numero = Math.ceil(n*Math.random());
  return numero;
}
console.log("\n");
//
console.log("Esercizio 7.7");
function tira_dado(){
  var dado = random_intero(6);
  return dado;
}
function dado6(){
  var tiro = tira_dado();
  var lanci = 1;
  while (tiro != 6){
    tiro = tira_dado();
    lanci++;
  }
  return lanci;
}
console.log(dado6());
console.log("\n");
//
console.log("Esercizio 7.8");
function prodotto(n,m){
  var moltiplicazione = 0;
  for (i = 1; i <= m; i++){
    moltiplicazione = moltiplicazione + n;
  }
  return moltiplicazione;
}
console.log(prodotto(5,6));
console.log(prodotto(3,9));
console.log("\n");
//
console.log("Esercizio 7.9");
function divisione(n,m){
  var diviso = 0;
  var resto = n;
  while (resto >= m){
    resto = resto - m;
    diviso++;
  }
  return diviso;
}
console.log(divisione(4,2));
console.log(divisione(11,6));
console.log(divisione(20,6));
console.log("\n");
//
console.log("Esercizio 7.10");
function potenza(n,m){
  var risultato = 1;
  for (i = 1; i <= m; i++){
    risultato = risultato * n;
  }
  return risultato;
}
console.log(potenza(2,3));
console.log(potenza(3,3));
console.log("\n");
