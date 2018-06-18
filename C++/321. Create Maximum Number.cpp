class Solution {
public:
    vector<int> maxNumber(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<int> ans;
        int m = nums1.size(), n = nums2.size();
        // 从nums1中挑出x个(0 <= x <= m)，nums2中挑出k-x个(0 <= k-x <= n)，合并
        for(int x = max(0, k - n); x <= min(m, k); x++) {
            auto v1 = maxSubseq(nums1, x);
            auto v2 = maxSubseq(nums2, k - x);
            auto v = merge(v1, v2);
            if(is_greater(v, ans)) ans = v;
        }
        return ans;
    }
private:
    // 依次挑出k个数，组成最大的数
    vector<int> maxSubseq(vector<int> &nums, int k) {
        stack<int> stk;
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            while(!stk.empty() && stk.top() < nums[i] && stk.size() + n - i - 1 >= k) {
                stk.pop();
            }
            if(stk.size() < k) stk.push(nums[i]);
        }
        vector<int> ans(k);
        int i = k - 1;
        while(!stk.empty()) {
            ans[i--] = stk.top();
            stk.pop();
        }
        return ans;
    }
    // 每次挑更大的进入ans,若相等，继续往后比较，直至有一方更大或者另一方到结尾
    vector<int> merge(vector<int> &v1, vector<int> &v2) {
        int i = 0, j = 0, m = v1.size(), n = v2.size();
        vector<int> ans;
        while(i < m && j < n) {
            if(v1[i] > v2[j]) {
                ans.push_back(v1[i++]);
            } else if(v1[i] < v2[j]) {
                ans.push_back(v2[j++]);
            } else {
                int ti = i, tj = j;
                while(ti < m && tj < n && v1[ti] == v2[tj]) {
                    ti++; tj++;
                }
                if(ti == m || (tj < n && v1[ti] < v2[tj])) {
                    ans.push_back(v2[j++]);
                } else {
                    ans.push_back(v1[i++]);
                }
            }
        }
        while(i < m) ans.push_back(v1[i++]);
        while(j < n) ans.push_back(v2[j++]);
        return ans;
    }
    bool is_greater(vector<int> &v1, vector<int> &v2) {
        if(v1.size() > v2.size()) return true;
        for(int i = 0; i < v1.size(); i++) {
            if(v1[i] == v2[i]) continue;
            return v1[i] > v2[i];
        }
        return false;
    }
};