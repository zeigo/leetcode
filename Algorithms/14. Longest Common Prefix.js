/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  const first = strs[0],
    num = strs.length;
  if (num === 0) return prefix;
  for (let i = 0, len = first.length; i < len; i++) {
    const toAdd = first[i];
    for (let j = 1; j < num; j++) {
      if(strs[j][i] !== toAdd)
        return prefix;
    }
    prefix += toAdd;
  }
  return prefix;
};