/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [],
    len = s.length;

  function dfs(index, tmp) {
    if (tmp.length === 4) {
      index === len && res.push(tmp.join("."));
      return;
    }
    for (let i = 1; i < 4; i++) {
      if (index + i > len) return;
      const str = s.substr(index, i);
      if (str.startsWith("0") && str.length > 1 || +str > 255) continue;
      dfs(index + i, tmp.concat(str));
    }
  }
  dfs(0, []);
  return res;
};