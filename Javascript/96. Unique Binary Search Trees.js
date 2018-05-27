// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

// For example,
// Given n = 3, there are a total of 5 unique BST's.

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
// [1,2,3], f(3) = f(0) * f(2) + f(1) * f(1) + f(2) * f(0)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let res = [];
    res[0] = 1;
    for(let i = 1; i <= n; i++){
      res[i] = 0;
      for(let j = 0; j < i; j++){
        res[i] += res[j] * res[i - 1 - j];
      }
    }
    return res[n];
};