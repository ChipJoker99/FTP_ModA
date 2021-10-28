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
 // (B1)	{(risultato, undefined), (x, 0), (a, ciao), (b, ciao), (foo, function(x,a,b){...})}
 // (B2)	{(risultato, undefined), (x, 0), (a, 10), (b, -1), (foo, function(x,a,b){...})}
 // (B2)	{(risultato, undefined), (x, 10), (a, 10), (b, 9), (foo, function(x,a,b){...})}
 if (x == 0){
 risultato = a + b;
 }
 else{
 risultato = a * b;
 }
 // (C1)	{(risultato, ciaociao), (x, 0), (a, ciao), (b, ciao), (foo, function(x,a,b){...})}
 // (C2)	{(risultato, 9), (x, 0), (a, 10), (b, -1), (foo, function(x,a,b){...})}
 // (C2)	{(risultato, 90), (x, 0), (a, 10), (b, -1), (foo, function(x,a,b){...})}
 return risultato;
}

var x, y, z;
x = 10;
z = 'ciao';
// (A)	{(x, 10), (y, undefined), (z, ciao), (foo, function(x,a,b){...})}
y = foo(0,z,z);
// (D)	{(x, 10), (y, ciaociao), (z, ciao), (foo, function(x,a,b){...})}
var r1 = foo(0, x, -1);
// (E)	{(r1, 9), (x, 10), (y, ciaociao), (z, ciao), (foo, function(x,a,b){...})}
var finale = foo(x, x, r1);
// (F)	{(finale, 90), (r1, 9), (x, 10), (y, ciaociao), (z, ciao), (foo, function(x,a,b){...})}


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


function media_aritmetica_4 (a,b,c,d) {
  //(B) {(a,30),(b,30),(c,18),(d,25),(u,30),(x,30),(y,18),(z,25),(media_aritmetica_4,function(a,b,c,d))}
  //(B1) {(a,20),(b,22),(c,24),(d,28),(u,30),(x,30),(y,18),(z,25),(media_aritmetica_4,function(a,b,c,d))}
  var m=((a+b+c+d)/4);
  //(C) {(m,25.75),(a,30),(b,30),(c,18),(d,25),(u,30),(x,30),(y,18),(z,25),(media_aritmetica_4,function(a,b,c,d))}
  //(C1) {(m,23.5),(a,20),(b,22),(c,24),(d,28),(u,30),(x,30),(y,18),(z,25),(media_aritmetica_4,function(a,b,c,d))}
  return m; 
}
var u=30; x=30; y=18; z=25;
//(A) {(u,30),(x,30),(y,18),(z,25),(media_aritmetica_4,function(a,b,c,d))}
var w=media_aritmetica_4(20,22,24,28)
//(D) {(w,23.5),(u,30),(x,30),(y,18),(z,25),(media_aritmetica_4,function(a,b,c,d))}


//ESERCIZIO 5.6


  function polinomio(n) {
    //(B) {(n,2),(a,2),(polinomio,function(n){...})}
    //(B1) {(n,5),(a,2),(polinomio,function(n){...})}
    var p=(n**3+3*n**2+2*n+5);
    //(C) {(p,29),(n,2),(a,2),(polinomio,function(n){...})}
    //(C1) {(p,230),(n,5),(a,2),(polinomio,function(n){...})}
    return p;
  }
  var a=2;
  //(A) {(a,2),(polinomio,function(n){...})}
  var b=(polinomio(5));
  //(D) {(b,230),(a,2),(polinomio,function(n){...})}


//ESERCIZIO 5.7


  function re_lu(x) {
  var r;
  //(B) {(r,undefined),(x,1),(a,1),(re_lu,function(x){...})}}
  //(B1) {(r,undefined),(x,3.3),(a,1),(re_lu,function(x){...})})}
  //(B2) {(r,undefined),(x,-2),(a,1),(re_lu,function(x){...})}
  if (x<0)
    r=0;
  else
    r=x;
  //(C) {(r,1),(x,1),(a,1),(re_lu,function(x){...})})}
  //(C1) {(r,3.3),(x,3.3),(a,1),(re_lu,function(x){...})}
  //(C2) {(r,0),(x,-2),(a,1),(re_lu,function(x){...})}
    return r;
}
var a=1;
//(A) {(a,1),(re_lu,function(x){...})}
var b=(re_lu(3.3));
//(D) {(b,3.3),(a,1),(re_lu,function(x){...})}
var c=(re_lu(-2));
//(E) {(c,0),(b,3.3),(a,1),(re_lu,function(x){...})}


//ESERCIZIO 5.8


function parametri2 (x,y) {
  var o
  //(B) {(o,undefined),(x,16),(y,4),(p,16),(q,4),(parametri2,function(x,y){...})}
  //(B1) {(o,undefined),(x,23),(y,3),(p,16),(q,4),(parametri2,function(x,y){...})}
  //(B2) {(o,undefined),(x,2),(y,18),(p,16),(q,4),(parametri2,function(x,y){...})}
  if (x%y==0)
    o=x/y;
  else
    o=Math.ceil(x/y);
    //(C) {(o,4),(x,16),(y,4),(p,16),(q,4),(parametri2,function(x,y){...})}
    //(C1) {(o,8),(x,23),(y,3),(p,16),(q,4),(parametri2,function(x,y){...})}
    //(C2) {(o,1),(x,2),(y,18),(p,16),(q,4),(parametri2,function(x,y){...})}
    return o;
}
var p=16; q=4;
//(A) {(p,16),(q,4),(parametri2,function(x,y){...})}
var r=parametri2(23,3);
//(D) {(r,8),(p,16),(q,4),(parametri2,function(x,y){...})}
var s=parametri2(2,18);
//(E) {(s,1),(r,8),(p,16),(q,4),(parametri2,function(x,y){...})}


//ESERCIZIO 5.9


function progressione (x,y,z) {
  var costante;
  //(B) {(costante,undefined),(x,2),(y,10),(z,14),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
  //(B1) {(costante,undefined),(x,7),(y,9),(z,11),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
  //(B2) {(costante,undefined),(x,1),(y,4),(z,7),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
  if ((z-y)==(y-x))
    costante='Progressione';
  else
    costante='Non progressione';
    //(C) {(costante,'Non progressione'),(x,2),(y,10),(z,14),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
    //(C1) {(costante,'Progressione'),(x,7),(y,9),(z,11),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
    //(C2) {(costante,'Progressione'),(x,1),(y,4),(z,7),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
    return costante
}
var a=2; b=10, c=14;
//(A) {(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
var d=progressione(7,9,11);
//(D) {(d,'Progressione'),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}
var e=progressione(1,4,7);
//(E) {(e,'Progressione'),(d,'Progressione'),(a,2),(b,10),(c,14),(progressione,function(x,y,z){...})}

//ESERCIZIO EXTRA

function vocale(lettera){
	var risultato;
	//B
	if(lettera=="A" || lettera=="E" || lettera=="I" || lettera=="O" || lettera=="U")
		risultato=true;
	else
		risultato=false;
	//C
	return risultato;
}
var a, b, c;
//A
a=vocale("A");
//D
b=vocale("Z");
//E
c=vocale("O");
//F

//A{(a,undefined),(b,undefined),(c,undefined)(function vocale(lettera){...})}
//B{(a,undefined),(b,undefined),(c,undefined),(lettera,"A"),(risultato,undefined),(function vocale(lettera){...})}
//C{(a,undefined),(risultato,true),(b,undefined),(c,undefined),(lettera,"A"),(function vocale(lettera){...})}
//D{(a,true),(b,undefined),(c,undefined),(function vocale(lettera){...})}
//B1{(a,true),(b,undefined),(c,undefined),(lettera,Z),(risultato,undefined),(function vocale(lettera){...})}
//C1{(a,true),(b,undefined),(c,undefined),(lettera,Z),(risultato,false),(function vocale(lettera){...})}
//E{(a,true),(b,false),(c,undefined),(function vocale(lettera){...})}
//B2{(a,true),(b,false),(c,undefined),(lettera,"O"),(risultato,undefined),(function vocale(lettera){...})}
//C2{(a,true),(b,false),(c,undefined),(lettera,"O"),(risultato,true),(function vocale(lettera){...})}
//F{(a,true),(b,false),(c,true),(function vocale(lettera){...})}
