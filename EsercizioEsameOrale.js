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
