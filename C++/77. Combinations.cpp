// tmp[i-1] < tmp[i] <= n+i-k+1
// 迭代
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> ans;
        vector<int> tmp(k, 0);
        int i = 0;
        while(i >= 0) {
            if(tmp[i] >= n + i - k + 1) {
                i--;
            } else if(i == k - 1) {
                tmp[i]++;
                ans.push_back(tmp);
            } else {
                tmp[i]++;
                tmp[i + 1] = tmp[i];
                i++;
            }
        }
        return ans;
    }
};
// 存在多层分支考虑backtrack，列举tmp[0]~tmp[k-1]所有情况，保证tmp[pos-1]+1 <= tmp[pos] <= n+pos-k+1
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> ans;
        vector<int> tmp(k, 0);
        helper(ans, tmp, 0, 1, n - k + 1, k);
        return ans;
    }
    void helper(vector<vector<int>> &ans, vector<int> &tmp, int pos, int min, int max, int k) {
        if(pos == k) {
            ans.push_back(tmp);
            return;
        }
        for(int i = min; i <= max; i++) {
            tmp[pos] = i;
            helper(ans, tmp, pos + 1, i + 1, max + 1, k);
        }
    }
};