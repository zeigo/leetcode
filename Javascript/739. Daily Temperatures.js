/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// stack存还未找到warmer的索引，则保持到栈顶对应值递减
var dailyTemperatures = function(temperatures) {
  let len = temperatures.length,
    res = new Array(len).fill(0),
    stack = []
  for (let i = 0; i < len; i++) {
    let temp = temperatures[i]
    while(stack.length !== 0) {
      if (temperatures[stack[stack.length - 1]] >= temp) break
      let index = stack.pop()
      res[index] = i - index
    }
    stack.push(i)
  }
  return res
};