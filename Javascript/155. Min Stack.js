/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = undefined
};

/** 
 * @param {number} x
 * @return {void}
 */
// 当添加不大于min的值，先push当前的min保存
MinStack.prototype.push = function(x) {
  if (this.min === undefined) {
    this.min = x
  }
  else if (x <= this.min) {
    this.stack.push(this.min)
    this.min = x
  }
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.min)
    this.min = this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */