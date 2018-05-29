// Lagrange's four-squares theorem 任意自然数可为不超过4个自然数的平方和
// n有因子4时，除以4后不改变结果
// n mod 8 = 7时，结果4
class Solution {
public:
    int numSquares(int n) {
        while(n % 4 == 0) n /= 4;
        if(n % 8 == 7) return 4;
        int sqrt_n = sqrt(n);
        if(sqrt_n * sqrt_n == n) return 1;
        for(int i = 1; i <= sqrt_n; i++) {
            int j = sqrt(n - i * i);
            if(i * i + j * j == n) return 2;
        }
        return 3;
    }
};

// dp
class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j * j <= i; j++) {
                dp[i] = min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }
};

// static dp，缓存结果
class Solution {
public:
    int numSquares(int n) {
        static vector<int> dp{0};
        int m = dp.size(); // dp[m-1]及之前已知
        while(m <= n) {
            int least = m;
            for(int j = 1; j * j <= m; j++) {
                least = min(least, dp[m - j * j] + 1);
            }
            dp.push_back(least);
            m++;
        }
        return dp[n];
    }
};