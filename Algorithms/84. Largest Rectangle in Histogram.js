/**
 * @param {number[]} heights
 * @return {number}
 */

// 暴力枚举brute force O(n2) Time Limit Exceeded
// 以height[i]为终点
// 优化：若height[i] <= height[i + 1]可直接跳过
// 未利用比较的结果
// var largestRectangleArea = function(heights) {
//   let len = heights.length,
//       maxArea = 0;
//   heights.push[0]; //for i+1
//   for(let i = 0; i < len; i++){
//     if(heights[i] <= heights[i + 1])
//       continue;
//     let minHeight = heights[i];
//     for(let j = i; j >= 0; j--){
//       minHeight = Math.min(minHeight, heights[j]);
//       maxArea = Math.max(maxArea, minHeight * (j - i + 1));
//     }
//   }
//   return maxArea;
// };

/*Stack O(n) ？
stack[i]存索引index，记录进行到此时以i位置为起点，
还未计算的部分里所能达到的最大高度heights[index]
以一个顶点为参考点，考虑以后面的顶点为终点，关键在于若顶点高度升高，可实现的最大面积
相对当前必然增大，故只需比较顶点高度下降的情况
重点转化为非递减序列
1 2 3 4 5
比较1*5,2*4,3*3,4*2,5*1
缺点：当前点与左点相平时，以左点为起点必定可达到更大面积，有冗余的计算
*/
// var largestRectangleArea = function(heights) {
//   let stack = [],
//       len = heights.length,
//       maxArea = 0;
//   stack.top = function() {
//     return this[this.length - 1];
//   };
//   stack.isEmpty = function() {
//     return this.length === 0;
//   }
//   for(let i = 0; i < len; i++){
//     if(stack.isEmpty() || heights[i] >= heights[stack.top()]){
//       stack.push(i);
//     } else{
//       let count = 0;
//       while(!stack.isEmpty() && heights[i] <  heights[stack.top()]){
//         let top = stack.pop();
//         count++;
//         maxArea = Math.max(maxArea, heights[top] * count);
//       }
//       while(stack.length < i + 1){
//         stack.push(i);
//       }
//     }
//   }
//   for(let i = 0; i < len; i++){
//     let top = stack.pop();
//     maxArea = Math.max(maxArea, heights[top] * (i + 1));
//   }
//   return maxArea;
// }

// optimization Stack
// 确定以每个顶点为最高点时的面积，左大右小
// 栈中索引处的值必然非递减，假设栈中有5,8,则6，7必定大于8，当9小于8时，
// 以8的高度为高，长度最大为9-5-1
// i=len, i--使最终栈全出
var largestRectangleArea = function(heights) {
  let stack = [],
      len = heights.length,
      maxArea = 0;
  stack.top = function() {
    return this[this.length - 1];
  };
  stack.isEmpty = function() {
    return this.length === 0;
  };
  for(let i = 0; i <= len; i++){
    let h = (i === len) ? 0 : heights[i];
    if(stack.isEmpty() || h >= heights[stack.top()]){
      stack.push(i);
    } else{
      let top = stack.pop(),
          width = stack.isEmpty() ? i : (i - stack.top() - 1);
      maxArea = Math.max(maxArea, heights[top] * width);
      i--;
    }
  }
  return maxArea;
}

