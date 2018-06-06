// ans[i] = (nums[0] * ... * nums[i-1]) * (nums[i+1] * ... * nums[n-1])
// 先从左往右求左积，再从右往左乘上右积
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> ans;
        int left = 1, right = 1, n = nums.size();
        for(int i = 0; i < n; i++) {
            ans.push_back(left);
            left *= nums[i];
        }
        for(int i = n - 1; i >= 0; i--) {
            ans[i] *= right;
            right *= nums[i];
        }
        return ans;
    }
};