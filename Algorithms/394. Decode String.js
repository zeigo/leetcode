/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  function isDigits(char) {
    return /\d/.test(char);
  }
  let countStk = [1],
      strStk = [""],
      len = s.length,
      i = 0;
  while(i < len) {
    if(isDigits(s[i])) { //发现数字读取最长数，进数栈
      let count = 0;
      while(isDigits(s[i])) {
        count = count * 10 + (+s[i]);
        i++;
      }
      i--;
      countStk.push(count);
    } else if(s[i] === "[") { //发现"["，""进字符串栈
      strStk.push("");
    } else if(s[i] === "]") { //发现"]"，取两个栈顶，相乘加到新字符串栈顶
      let topCount = countStk.pop();
      let topStr = strStk.pop();
      strStk[strStk.length - 1] += topStr.repeat(topCount);
    } else { //普通字符拼接到字符串栈顶
      strStk[strStk.length - 1] += s[i];
    }
    i++;
  }
  return strStk[strStk.length - 1];
};
