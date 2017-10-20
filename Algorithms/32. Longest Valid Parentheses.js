/**
 * @param {string} s
 * @return {number}
 */
// use stack
var longestValidParentheses = function(s) {
  if(!s) return 0;
  let start = -1, // start表示无法形成合法子串的起始index
      max = 0, 
      len = s.length,
      stack = [];
  for(let i = 0; i < len; i++){
    if(s[i] === "("){
      stack.push(i);
    }
    else if(stack.length !== 0){
      stack.pop();
      // 一旦pop,即形成一个合法子串
      if(stack.length === 0){
        max = Math.max(max, i - start);
      }// start + 1到i合法
      else
        max = Math.max(max, i - stack[stack.length - 1]);
      // stack top到i合法
    }
    else{
      start = i;
    }
  }
  return max;
};

// use dp ??
