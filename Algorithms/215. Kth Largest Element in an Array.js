/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 小堆heap sort，先放入k个，当之后的大于堆顶，则取出堆顶，放入新数
var findKthLargest = function (nums, k) {
  class PriorityQueue {
    constructor() {
      this.arr = []
    }
    add(num) {
      let arr = this.arr
      function findFirstLarger(list) { // 二分法查找第一个大于num的位置
        let left = 0,
          right = list.length - 1
        while (left <= right) {
          let mid = Math.floor((left + right) / 2)
          if(list[mid] <= num) {
            left = mid + 1
          }
          else {
            right = mid - 1
          }
        }
        return left
      }
      // 数组为空或末尾仍不大于num，直接push
      if (arr.length === 0 || arr.slice(-1)[0] <= num) {
        arr.push(num)
      }
      else {
        arr.splice(findFirstLarger(arr), 0, num)
      }
    }
    take() {
      return this.arr.shift()
    }
    head() {
      return this.arr[0]
    }
  }
  let pq = new PriorityQueue(),
    i = 0,
    len = nums.length
  for (; i < k; i++) {
    pq.add(nums[i])
  }
  for (; i < len; i++) {
    if (nums[i] > pq.head()) {
      pq.take()
      pq.add(nums[i])
    }
  }
  return pq.head()
};

// quick select，类似快排
var findKthLargest = function (nums, k) {
  let len = nums.length,
    r = len - k //升序，第k大索引
  function swap(x, y) {
    let tmp = nums[x]
    nums[x] = nums[y]
    nums[y] = tmp
  }

  function helper(left, right) {
    let value = nums[left]
    if (left >= right) return value
    let i = left,
      j = right
    while (i < j) {
      while (i < j && value <= nums[j]) j--
        swap(i, j)
      while (i < j && value >= nums[i]) i++
        swap(i, j)
    }
    if (i < r) return helper(i + 1, right)
    if (i > r) return helper(left, i - 1)
    return value
  }
  return helper(0, len - 1)
}