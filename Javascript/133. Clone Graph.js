/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
// recursive
var cloneGraph = function(graph) {
  var map = new Map() // 避免重复克隆造成无限循环
  function clone(node) {
    if (!node) return null
    if (!map.has(node)) { 
      map.set(node, new UndirectedGraphNode(node.label))
      for (let neighbor of node.neighbors) {
        map.get(node).neighbors.push(clone(neighbor))
      }
    }
    return map.get(node)
  }
  return clone(graph)
};

// BFS
var cloneGraph = function(graph) {
  if (!graph) return null
  var copy = new UndirectedGraphNode(graph.label),
    map = new Map(),
    queue = []
  queue.push(graph)
  map.set(graph, copy)
  while (queue.length) {
    let front = queue.shift()
    for (let neighbor of front.neighbors) {
      if (!map.has(neighbor)) {
        queue.push(neighbor)
        map.set(neighbor, new UndirectedGraphNode(neighbor.label))
      }
      map.get(front).neighbors.push(map.get(neighbor))
    }
  }
  return copy
}