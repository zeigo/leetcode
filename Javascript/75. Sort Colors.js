/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// one pass
var sortColors = function(nums) {
  let n0 = -1, n1 = -1, n2 = -1, len = nums.length;
  // n0,n1,n2记录已排好中0，1，2最后的索引
  for(let i = 0; i < len; i++){
    if(nums[i] === 0){
      nums[++n2] = 2; nums[++n1] = 1; nums[++n0] = 0;
    }
    else if(nums[i] === 1){
      nums[++n2] = 2; nums[++n1] = 1;
    }
    else nums[++n2] = 2;
  }
};

// two pointers
var sortColors = function(nums){
  let lp = 0, rp = nums.length - 1;
  // lp 最后一个0之后位置，rp第一个2之前位置0..0 lp .. rp 2..2
  function swap(i, j){
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  for(let i = 0; i <= rp; i++){
    if(nums[i] === 2){
      swap(i--, rp--);
    }
    else if(nums[i] === 0){
      swap(i, lp++);
    }
  }
}
