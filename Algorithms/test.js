let grid = [ 
  [1, 2, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];
let findPath = function (grid) {
  let row = grid.length,
      col = grid[0].length;
  function helper(i, j) {
    // console.log(i, j);
    if(grid[i][j - 1] !== undefined && grid[i][j - 1] < grid[i][j]){ // 左
      grid[i][j - 1] = 1;
      if(!helper(i, j - 1))
        grid[i][j - 1] += -1;
    }
    if(grid[i - 1] && grid[i - 1][j] < grid[i][j]){ // 上
      grid[i - 1][j] = 1;
      if(!helper(i - 1, j))
        grid[i - 1][j] += -1;
    }
    if(grid[i][j + 1] !== undefined && grid[i][j + 1] < grid[i][j]){ // 右
      grid[i][j + 1] = 1;
      if(!helper(i, j + 1))
        grid[i][j + 1] += -1;
    }
    if(grid[i + 1] && grid[i + 1][j] < grid[i][j]){ // 下
      grid[i + 1][j] = 1;
      if(!helper(i + 1, j))
        grid[i + 1][j] += -1;
    }
    let res = grid.every(oneRow => {
      return oneRow.every(val => {return val !== 0;})
    })
    // console.log(res);
    return res;
  }
  return helper(0, 0);
}
console.log(findPath(grid));
console.log(grid);
