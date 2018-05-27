/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 先排序，依次累加，等于或超过target时回溯，注意去重
var combinationSum2 = function(candidates, target) {
  function backtrack(cur, pos, tar){
    if(tar === 0){
      res.push(cur.slice());
    } else{
      for(let i = pos; i < len && candidates[i] <= tar; i++){
        if(i === pos || candidates[i] !== candidates[i - 1]){
          cur.push(candidates[i]);
          backtrack(cur, i + 1, tar - candidates[i]);
          cur.pop();
        }
      }
    }
  }
  let res = [],
      len = candidates.length;
  candidates.sort((a, b) => a - b);
  backtrack([], 0, target);
  return res;
};
