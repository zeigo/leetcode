// class Solution {
// public:
//     int rob(vector<int>& nums) {
//         int _rob = 0, not_rob = 0; // 上一个房子抢或不抢能达到的最大值
//         for(auto x : nums) {
//             int tmp = _rob;
//             _rob = not_rob + x; // 抢此次房子，则上次不抢
//             not_rob = not_rob > tmp ? not_rob : tmp; // 此次不抢，上次可抢可不抢
//         }
//         return (_rob > not_rob) ? _rob : not_rob;
//     }
// };

class Solution {
public:
    int rob(vector<int>& nums) {
        // dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
        // 到i时，分抢和不抢两种情况
        int n = nums.size();
        vector<int> dp(n);
        if(n == 0) return 0;
        dp[0] = nums[0];
        if(n > 1) {
            dp[1] = max(nums[0], nums[1]);
            for(int i = 2; i < n; i++) {
                dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]);
            }
        }
        return dp.back();
    }
};