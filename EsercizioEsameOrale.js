//calcolare massimo elementi diagonale principale

function massimo_diagonale(A){
  var i;
  var max = -Infinity;
  for (i = 0; i < A.length; i++){
    if (A[i][i] > max)
    max = A[i][i];
  }
  return max;
}
var M = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, -3, 4]];
console.log(massimo_diagonale(M));


//somma di tutti gli elementi che non sono sulla diagonale

function esame(M)
{
	var somma = 0;

	for(var i = 0; i < M.length; i++)
	{
		for(var j = 0; j < M[i].length; j++)
		{
			if(i!=j)
				somma += M[i][j];
		}
	}

	return somma;
}

var mat = [[1, 1, -1], [-2, 2, 2], [0, 0, 2]];
console.log(esame(mat));

