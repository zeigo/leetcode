// time O(n2)
class Solution {
  public:
    int lengthOfLIS(vector<int> &nums) {
        if (nums.empty())
            return 0;
        int n = nums.size();
        vector<int> dp(n); // dp[i]表示以nums[i]结尾的最长子序列的长度
        dp[0] = 1;
        for (int i = 1; i < n; ++i) {
            int max_len = 0;
            // 寻找i之前比nums[i]小的位置，找到dp最大的
            for (int j = i - 1; j >= 0; --j) {
                if (nums[i] > nums[j]) {
                    max_len = max(max_len, dp[j]);
                }
            }
            dp[i] = max_len + 1;
        }
        return *max_element(dp.begin(), dp.end());
    }
};
// time O(nlgn) 很巧妙的方法
// 原理：已有一个长度i的LIS，如果新的元素大于结尾元素，则能形成长度i+1的LIS；
// LIS结尾越小，越容易加入新元素
// 遍历nums, dp[i]用来保存已访问的元素可形成的长度为i+1，结尾元素最小的LIS的结尾元素
// 当访问到nums中新元素x时，如果x比dp[i]大，则可以有以x结尾的长度i+2的LIS；如果同时x小于
// （或等于）dp[i+1]，则dp[i+1]可以更新为x。因此，只要用二分法找到dp中第一个>=x的位置，
// 则此位置更新为x，如果找不到，即x最大，push_back到最后
class Solution {
  public:
    int lengthOfLIS(vector<int> &nums) {
        vector<int> dp;
        for (auto x : nums) {
            auto it = lower_bound(dp.begin(), dp.end(), x);
            if (it == dp.end()) {
                dp.push_back(x);
            } else {
                *it = x;
            }
        }
        return dp.size();
    }
};