/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// reachable[i] is true if s.slice(0, i) is reachable
var wordBreak = function(s, wordDict) {
  let len = s.length,
      reachable = new Array(len + 1).fill(false);
  reachable[0] = true;
  for(let i = 1; i <= len; i++)
    for(let j = 0; j < i; j++){
      if(reachable[j] && wordDict.includes(s.slice(j, i))){
        reachable[i] = true;
        break;
      }
    }
  return reachable[len];
};