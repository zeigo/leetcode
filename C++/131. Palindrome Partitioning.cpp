class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> ans;
        vector<string> path;
        helper(s, ans, path, 0);
        return ans;
    }
private:
    // backtrack
    void helper(string &s, vector<vector<string>> &ans, vector<string> &path, int l) {
        if(l == s.size()) {
            ans.push_back(path);
            return;
        }
        for(int pos = l; pos < s.size(); pos++) {
            if(is_palindrome(s, l, pos)) {
                path.push_back(string(s, l, pos - l + 1));
                helper(s, ans, path, pos + 1);
                path.pop_back();
            }
        }
    }
    // 判断从l到r是否为回文
    bool is_palindrome(string &s, int l, int r) {
        while(l < r) {
            if(s[l] != s[r]) return false;
            l++; r--;
        }
        return true;
    }
};