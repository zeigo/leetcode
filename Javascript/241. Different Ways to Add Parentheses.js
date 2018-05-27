/**
 * @param {string} input
 * @return {number[]}
 */
// split to two parts around the operator, 
// recursive, use hashMap to cache
var diffWaysToCompute = function (input) {
  let optReg = /[\-\+\*]/,
    optMap = {
      "*": (a, b) => a * b,
      "+": (a, b) => a + b,
      "-": (a, b) => a - b
    },
    hashMap = new Map()

  function helper(input) {
    let res = [],
      input1, input2, way1, way2
    for (let i = 0, len = input.length; i < len; i++) {
      let c = input[i]
      if (optReg.test(c)) {
        input1 = input.slice(0, i)
        input2 = input.slice(i + 1)
        way1 = hashMap.has(input1) ? hashMap.get(input1) :
          helper(input1)
        way2 = hashMap.has(input2) ? hashMap.get(input2) :
          helper(input2)
        for (let i1 of way1)
          for (let i2 of way2)
            res.push(optMap[c].call(null, i1, i2))
      }
    }
    if (res.length === 0) {
      res.push(+input)
    }
    hashMap.set(input, res)
    return res
  }
  return helper(input)
};