/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 优化：对象存储改为二维数组存储used
var exist = function(board, word) {
  let row = board.length,
      col = board[0].length,
      used = [];
  for(let i = 0; i < row; i++){
    used.push(new Array(col).fill(false));
  }
  for(let i = 0; i < row; i++)
    for(let j = 0; j < col; j++){
      if(helper(i, j, 0))
        return true;
    }
  return false;
  function helper(i, j, index){
    if(index === word.length) 
      return true;
    let error_cond = i < 0 || i >= row || j < 0 || j >= col || 
      board[i][j] !== word[index] || used[i][j];
    if(error_cond) return false;
    used[i][j] = true;
    let res =  helper(i, j + 1, index + 1) // 右
            || helper(i - 1, j, index + 1) // 下
            || helper(i + 1, j, index + 1) // 上
            || helper(i, j - 1, index + 1); // 左
    used[i][j] = false;
    return res;
  }  
};