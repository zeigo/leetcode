// 1 + 9 + 9*9 + 9*9*8 + ...
class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        if(n == 0) return 1;
        if(n == 1) return 10;
        vector<int> ans{1, 9};
        for(int i = 2; i <= n && i < 11; i++) {
            ans.push_back(ans.back() * (11 - i));
        }
        return accumulate(ans.begin(), ans.begin() + min(n, 10) + 1, 0);
    }
};