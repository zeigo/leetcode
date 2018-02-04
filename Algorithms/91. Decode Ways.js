/**
 * @param {string} s
 * @return {number}
 */
// n由n-1+1或n-2+2组成
// 当n位置为0，f(n) = f(n-2)
// 当n不为0且n、n-1能组成适合的两位数，f(n) = f(n-1) + f(n-2)
// 当n不为0且n、n-1不能组成适合的两位数，f(n) = f(n-1)
var numDecodings = function(s) {
  var len = s.length,
    res1 = 1,
    res2 = 1,
    res = 0,
    prev = 0,
    cur
  for (let i = 0; i < len; i++) {
    cur = +s[i]
    switch (prev) {
      case 1:
        if (cur === 0) {
          res = res2
        } else {
          res = res1 + res2
        }
        break
      case 2:
        if (cur === 0) {
          res = res2
        } else if (cur > 6) {
          res = res1
        } else {
          res = res1 + res2
        }
        break
      default:
        if (cur === 0) return 0
        res = res1
    }
    prev = cur
    res2 = res1
    res1 = res
  }
  return res
};
