//Esercizio di divertimento in cui creo triangoli con gli asterischi

function asterischi(n){
	var i, j, seq="";
	for(i=0;i<=n;i++){
		for(j=0;j<i;j++){
			seq+="*";
		}
		seq+="\n";
	}
	return seq;
}

console.log(asterischi(3));
console.log(asterischi(6));
console.log(asterischi(8));
