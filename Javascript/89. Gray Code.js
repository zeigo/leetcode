/**
 * @param {number} n
 * @return {number[]}
 */
//单纯字符串递归
var grayCode = function(n) {
  function binToNum(str) {
    str = str.replace(/^0*/, "")
    let num = 0
    for (let i of str) {
      num = 2 * num + +i
    }
    return num
  }
  const top = ("0").repeat(n), res = [top]

  function helper(res, top) {
    for (let i = top.length - 1; i >= 0; i--) {
      let next = top.split("")
      next.splice(i, 1, 1 - top[i] + "")
      next = next.join("")
      if (!res.includes(next)) {
        res.push(next)
        helper(res, next)
        break
      }
    }
  }
  helper(res, top)
  return res.map(binToNum)
};
//位操作
var grayCode = function(n) {
  var result = [];
  for (var i = 0; i< 1<<n; i++) {
      result.push(i ^ i>>1);
  }
  return result;
};