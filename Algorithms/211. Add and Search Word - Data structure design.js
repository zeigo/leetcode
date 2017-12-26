/**
 * Initialize your data structure here.
 */
function TrieNode(char, isEnd) {
  this.links = {}
  this.isEnd = isEnd
}

var WordDictionary = function () {
  this.root = new TrieNode(null, false)
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  var prev = this.root
  for (var ch of word) {
    if (!prev.links[ch]) {
      prev.links[ch] = new TrieNode(ch, false)
    }
    prev = prev.links[ch]
  }
  prev.isEnd = true
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function helper(node, chars) {
    var p = node,
      char
    for (var i = 0, len = chars.length; i < len; i++) {
      char = chars[i]
      if (char !== ".") {
        if (!p.links[char]) {
          return false
        }
        p = p.links[char]
      }
      else { // 检查.后面节点及子串，若没有，返回false；若有一条路径true，提前返回true
        for(var key in p.links) {
          if(helper(p.links[key], chars.slice(i + 1))) {
            return true
          }
        }
        return false
      }
    }
    return p.isEnd
  }
  return helper(this.root, word)
};