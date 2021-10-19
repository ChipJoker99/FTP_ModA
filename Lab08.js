console.log("Esercizio 8.1");
function precedente(giorno){
  var pred;
  switch (giorno){
    case "lunedì":
    pred = "domenica";
    break;
    case "martedì":
    pred = "lunedì";
    break;
    case "mercoledì":
    pred = "martedì";
    break;
    case "giovedì":
    pred = "mercoledì";
    break;
    case "venerdì":
    pred = "giovedì";
    break;
    case "sabato":
    pred = "venerdì";
    break;
    case "domenica":
    pred = "sabato";
    break;
    default:
    pred = "GIORNO NON CORRETTO";
  }
  return pred;
}
console.log("Il giorno prima di lunedì è " + precedente("lunedì") + ".");
console.log("Il giorno prima di giovedì è " + precedente("giovedì") + ".");
console.log("Il giorno prima di domenica è " + precedente("domenica") + ".");
console.log("Il giorno prima di lunedo è " + precedente("lunedo") + ".");
console.log("\n");
//
console.log("Esercizio 8.2");
function tipo(c){
  var type;
  switch (c){
    case "a": case "b": case "c": case "d": case "e": case "f": case "g": case "h": case "i": case "j": case "k": case "l": case "m": case "n": case "o": case "p": case "q": case "r": case "s": case "t": case "u": case "v": case "w": case "x": case "y": case "z":
    type = "lettera";
    break;
    case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
    type = "cifra";
    break;
    case "+": case "-": case "*": case "/": case "<": case ">": case "!": case "&": case "|": case "=":
    type = "operatore";
    break;
    case "(": case ")": case " ": case ".": case ",": case "_":
    type = "separatore";
    break;
    default:
    type = "CARATTERE NON RICONOSCIUTO";
  }
  return type;
}
console.log("Che carattere è 9? " + tipo("9"));
console.log("Che carattere è g? " + tipo("g"));
console.log("Che carattere è /? " + tipo("/"));
console.log("Che carattere è _? " + tipo("_"));
console.log("\n");
//
console.log("Esercizio 8.3");
function bisestile(n){
return ((n > 1584) && ((n % 4 == 0 && n % 1000 != 0) || (n % 400 == 0)));
}
function ieri(g,m,a){
  var giorno, mese, anno;
  switch (g){
    case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
      giorno = g - 1;
      mese = m;
      anno = a;
      break;
    case 1:{
      anno = a;
      switch (m){
        case "gennaio":
          giorno = 31;
          mese = "dicembre";
          anno = anno - 1;
          break;
        case "febbraio":
          giorno = 31;
          mese = "gennaio";
          break;
        case "marzo":
          mese = "febbraio";
          if (bisestile(a)){
            giorno = 29;
            break;
          }
          else{
            giorno = 28;
            break;
          }
        case "aprile":
          giorno = 31;
          mese = "marzo";
          break;
        case "maggio":
          giorno = 30;
          mese = "aprile";
          break;
        case "giugno":
          giorno = 31;
          mese = "maggio";
          break;
        case "luglio":
          giorno = 30;
          mese = "giugno";
          break;
        case "agosto":
          giorno = 31;
          mese = "luglio";
          break;
        case "settembre":
          giorno = 31;
          mese = "agosto";
          break;
        case "ottobre":
          giorno = 30;
          mese = "settembre";
          break;
        case "novembre":
          giorno = 31;
          mese = "ottobre";
          break;
        case "dicembre":
          giorno = 30;
          mese = "novembre";
          break;
      }
    }
  }
  return giorno + " " + mese + " " + anno;
}
console.log(ieri(30, "giugno", 2013));
console.log(ieri(28, "febbraio", 2000));
console.log(ieri(31, "dicembre", 2012));
console.log(ieri(3, "maggio", 2010));
console.log(ieri(1, "gennaio", 2015));
console.log(ieri(1, "marzo", 2012));
console.log(ieri(1, "marzo", 2015));
console.log(ieri(1, "dicembre", 2013));
console.log("\n");
//
console.log("Esercizio 8.4");
function fattoriale(n){
  var risultato;
  if (n == 0)
    risultato = 1;
  else
    risultato = n * fattoriale (n - 1);
  return risultato;
}
console.log("Il fattoriale di 5 è " + fattoriale(5) + ".");
console.log("Il fattoriale di 2 è " + fattoriale(2) + ".");
console.log("Il fattoriale di 6 è " + fattoriale(6) + ".");
console.log("Il fattoriale di 10 è " + fattoriale(10) + ".");
console.log("Il fattoriale di 3 è " + fattoriale(3) + ".");
console.log("\n");
//
console.log("Esercizio 8.5");
function somma_ricorsiva(n,m){
  var somma;
  if (m == 0)
    somma = n;
  else
    somma = 1 + somma_ricorsiva(n,m - 1);
  return somma;
}
console.log(somma_ricorsiva(2,4));
console.log(somma_ricorsiva(5,7));
console.log(somma_ricorsiva(5,2));
console.log(somma_ricorsiva(3,2));
console.log(somma_ricorsiva(9,1));
console.log("\nFine esercitazione.");
