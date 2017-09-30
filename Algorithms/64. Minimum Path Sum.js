// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

/**
 * @param {number[][]} grid
 * @return {number}
 */
// zoom O(n), use one row or column to store, when update tmp[i], just
// need to use tmp[i - 1] and previous tmp[i]
var minPathSum = function(grid) {
  let row = grid.length;
  if(!row) return 0;
  let column = grid[0].length;
  let tmp = [grid[0][0]];
  for(let i = 1; i < column; i++){
    tmp[i] = tmp[i - 1] + grid[0][i];
  }
  for(let i = 1; i < row; i++){
    tmp[0] = tmp[0] + grid[i][0];
    for(let j = 1; j < column; j++){
      tmp[j] = Math.min(tmp[j - 1], tmp[j]) + grid[i][j];
    }
  }
  return tmp.pop();
};