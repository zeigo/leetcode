/**
 * @param {character[][]} grid
 * @return {number}
 */
//用visited数组记录是否访问过,dfs
var numIslands = function(grid) {
  let row = grid.length;
  if(row === 0) return 0;
  let col = grid[0].length,
      visited = [],
      count = 0;
  for(let i = 0; i < row; i++) {
    visited.push(Array(col).fill(false));
  }
  function dfsMark(i, j) {
    if(i < 0 || i >= row || j < 0 || j >= col || visited[i][j] || grid[i][j] == "0")
      return ;
    visited[i][j] = true;
    dfsMark(i - 1, j);
    dfsMark(i + 1, j);
    dfsMark(i, j - 1);
    dfsMark(i, j + 1);
  }
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(grid[i][j] == "1" && !visited[i][j]) {
        dfsMark(i, j);
        count++;
      }
    }
  }
  return count;
};
//优化："2"代表访问过，其实直接设"0"也行
var numIslands = function(grid) {
  let row = grid.length;
  if(row === 0) return 0;
  let col = grid[0].length,
      count = 0;
  function dfsMark(i, j) {
    if(i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== "1")
      return ;
    grid[i][j] = "2";
    dfsMark(i - 1, j);
    dfsMark(i + 1, j);
    dfsMark(i, j - 1);
    dfsMark(i, j + 1);
  }
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(grid[i][j] == "1") {
        dfsMark(i, j);
        count++;
      }
    }
  }
  return count;
};


