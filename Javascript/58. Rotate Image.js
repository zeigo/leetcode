/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// clockwise: reverse top to down, and symmetry along top-left to buttom-right
var rotate = function(matrix) {
  let n = matrix.length;
  for(let i = 0, j = n - 1; i < j; i++, j--) {
    let tmp = matrix[i];
    matrix[i] = matrix[j];
    matrix[j] = tmp;
  }
  for(let i = 0; i < n - 1; i++) {
    for(let j = i + 1; j < n; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
};