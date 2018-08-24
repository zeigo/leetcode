class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> ans;
        // ans[i] == i + 1
        for(int i = 1; i <= nums.size(); i++) {
            ans.push_back(i);
        }
        // 遍历nums，若发现i，则ans[i - 1] = 0
        for(auto i : nums) {
            ans[i - 1] = 0;
        }
        // ans中只剩没出现的数字和0，类似283题将0全移到右边，再去掉0即可
        int slow = 0;
        for(int fast = 0; fast < nums.size(); fast++) {
            if(ans[fast] != 0) {
                ans[slow] = ans[fast];
                slow++;
            }
        }
        ans.erase(ans.begin() + slow, ans.end());
        return ans;
    }
};