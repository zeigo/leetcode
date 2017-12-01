/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length,
    res = [];
  if (!row) return res;
  const col = matrix[0].length;
  let topTime = 0,
    rightTime = 0,
    bottomTime = 0,
    leftTime = 0;
  while (true) {
    for (let i = leftTime; i < col - rightTime; i++) {
      res.push(matrix[topTime][i]);
    }
    topTime++;
    if (topTime + bottomTime === row) break;
    // *******
    for (let i = topTime; i < row - bottomTime; i++) {
      res.push(matrix[i][col - rightTime - 1])
    }
    rightTime++;
    if (leftTime + rightTime === col) break;
    // *
    // *
    // *
    for (let i = col - rightTime - 1; i >= leftTime; i--) {
      res.push(matrix[row - bottomTime - 1][i]);
    }
    bottomTime++;
    if (topTime + bottomTime === row) break;
    // ********
    // ********
    for (let i = row - bottomTime - 1; i >= topTime; i--) {
      res.push(matrix[i][leftTime]);
    }
    leftTime++;
    if (leftTime + rightTime === col) break;
    // **
    // **
    // **
    // **
  }
  return res;
};