/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let all = nums1.length + nums2.length;
  // n1, n2中第k小的值
  function findKth(k, n1, n2){
    let l1 = n1.length, l2 = n2.length;
    // 确保l1 <= l2
    if(l1 > l2) return findKth(k, n2, n1);
    if(l1 === 0) return n2[k - 1];
    if(k === 1) return Math.min(n1[0], n2[0]);
    let mid = parseInt(k / 2);
    // 取n1前i个，n2前j个
    let i = Math.min(mid, l1), j = k - i;
    if(n1[i - 1] === n2[j - 1]) return n1[i - 1];
    else if(n1[i - 1] < n2[j - 1]){
      return findKth(j, n1.slice(i), n2);
    }
    else{
      return findKth(i, n1, n2.slice(j));
    }
  }
  if(all % 2 === 0){
    return (findKth(all/2, nums1, nums2) + findKth(all/2 + 1, nums1, nums2))/2;
  }
  else{
    return findKth((all+1)/2, nums1, nums2);
  }
};