# leetcode

leetcode practice

## Mark

[300.Longest Increasing Subsequence](./C%2B%2B/300.Longest%20Increasing%20Subsequence.cpp)

time O(nlgn)
原理：已有一个长度i的IS（递增子序列），如果新的元素大于结尾元素，则能形成长度i+1的IS，
IS结尾越小，越容易加入新元素变长。遍历nums, dp[i]用来保存已访问的元素可形成的长度为i+1，
结尾元素最小的IS的结尾元素。当访问到nums中新元素x时，如果x比dp[i]大，则可以有以x结尾的
长度i+2的IS；如果同时x小于（或等于）dp[i+1]，则dp[i+1]可以更新为x。因此，只要用二分法
找到dp中第一个>=x的位置，则此位置更新为x，如果找不到，即x最大，push_back到最后。遍历结束后，
dp的长度即LIS长度。