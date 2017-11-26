/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//num1[i] * num2[j] will be placed at index i + j, i + j + 1
var multiply = function (num1, num2) {
  const l1 = num1.length,
    l2 = num2.length,
    total = l1 + l2,
    pos = new Array(total).fill(0); //l1+l2
  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = p1 + 1,
        sum = num1[i] * num2[j] + pos[p2];
      pos[p2] = sum % 10;
      pos[p1] += parseInt(sum / 10);
    }
  }
  let start = 0,
    res = "";
  while (pos[start] === 0) {
    start++;
  }
  if (start === total) return "0";
  for (let i = start; i < total; i++) {
    res += pos[i];
  }
  return res;
};