// 任何一个ugly数一定由之前的某个数乘2/3/5得到
// m2代表dp中0~m2-1的数已被乘以2放入dp中，现在轮到m2来乘
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> dp{1};
        int m2 = 0, m3 = 0, m5 = 0;
        for(int i = 1; i < n; i++) 
        {
            int d2 = dp[m2] * 2, d3 = dp[m3] * 3, d5 = dp[m5] * 5;
            dp.push_back(min(d2, min(d3, d5)));
            if(dp[i] == d2) m2++;
            if(dp[i] == d3) m3++;
            if(dp[i] == d5) m5++;
        }
        return dp[n - 1];
    }
};