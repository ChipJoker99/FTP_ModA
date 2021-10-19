//ESERCIZIO 5.1

function foo(x,y,z){
 // (B1)  {(x,12), (y,2), (z, true), (a,12), (foo, function(x,y,z){...})}
 // (B2)  {(x,24), (y,2), (z,false), (r1, 24), (a,12), (foo, function(x,y,z){...})}
 var risultato;
 if (z == true)
 risultato = x * y;
 else
 risultato = x - y;
 // (C1)  {(x,12), (y,2), (z, true), (risultato, 24) (a,12), (foo, function(x,y,z){...})}
 // (C2) {(x,24), (y,2), (z,false), (r1, 24), (a,12), (risultato,22), (foo, function(x,y,z){...})}
 return risultato;
}
var a = 12, y = 2; //definisco nuova var a
// (A) {(a,12), (y,2), (foo, function(x,y,z){...})}
var r1 = foo(a,y,true); //r1 GLOBALE
// (D) {(r1,24), (a,12), (y,2), (foo, function(x,y,z){...})}
var r2 = foo(r1,y,false);
// (E) {(r2,22), (r1,24), (y,2), (a,12), (foo, function(x,y,z){...})}


//ESERCIZIO 5.2


function funzione1(x,y){
 var r=0;
 // (C) {(r,0),(a, 5),(b,10),(x,10),(y,5),(function funzione1(x,y){...})}
 if (x>y)
 r = x+y;
 else
 r = 0;
 // (D) {(r,15),(a, 5),(b,10),(x,10),(y,5),(function funzione1(x,y){...})}
 return r+1;
}
var a, b;
// (A) {(a, undefined),(b,undefined),(function funzione1(x,y){...})}
a = 5;
b = 10;
// (B) {(a, 5),(b,10),(function funzione1(x,y){...})}
var r1 = funzione1(b, a);
// (E) {(r1, 16),(a, 5),(b,10),(function funzione1(x,y){...})}


//ESERCIZIO 5.3


function foo(x, a, b) {
 var risultato;
 // (B)
 if (x == 0){
 risultato = a + b;
 }
 else{
 risultato = a * b;
 }
 // (C)
 return risultato;
}
var x, y, z;
x = 10;
z = 'ciao';
// (A)
y = foo(0,z,z);
// (D)
var r1 = foo(0, x, -1);
// (E)
var finale = foo(x, x, r1);
// (F)


//ESERCIZIO 5.4


function foo(x) {
 var a;
 // (B) {(a,undefined),(b,12),(x,42),(function foo(x){...})}
// (B1) {(r1,4),(a,undefined),(b,12),(x,12),(function foo(x){...})}
// (B2) {(r1,4),(r2,1),(a,undefined),(b,12),(x,41),(function foo(x){...})}
 a = x % 10;
 // (C) {(a,2),(b,12),(x,42)(function foo(x){...})}
// (C1) {(r1,4),(a,2),(b,12),(x,12),(function foo(x){...})}
// (C2) {(r1,4),(r2,1),(a,1),(b,12),(x,41),(function foo(x){...})}
 return (x-a)/10;
}
var a = 42, b = 12;
// (A) {(a,42),(b,12),(function foo(x){...})}
var r1 = foo(a);
// (D) {(r1,4),(a,42),(b,12),(function foo(x){...})}
var r2 = foo(b);
// (E) {(r1,4)(r2,1),(a,42),(b,12),(function foo(x){...})}
var r3 = foo(r1*10+r2);
// (F) {(r1,4)(r2,1),(r3,4),(a,42),(b,12),(function foo(x){...})}
console.log(r3);


//ESERCIZIO 5.5
