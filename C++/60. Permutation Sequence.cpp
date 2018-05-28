// 序号全部从0开始，取出第k个即序号k-1，转换为求第k-1个，便于处理
// ans[0]有chs中序号0~n-1的可能，每种ans[0]后有factorial=(n-1)!种排列
// 则第k种排列对应的ans[0]为第j = k / factorial个，ans[0]之后的排列
// 为factorial种排列的第 k % factorial个
// 确定ans[0]后将chs[j]擦除
class Solution {
public:
    string getPermutation(int n, int k) {
        string ans, chs(n, '0');
        int factorial = 1, i, j; 
        for(i = 1; i <= n; i++) {
            factorial *= i;
            chs[i - 1] += i; // "123...n"，每次取出一个
        }
        k--;
        for(i = 0; i < n; i++) {
            factorial /= n - i;
            j = k / factorial;
            k = k % factorial;
            ans.push_back(chs[j]);
            chs.erase(chs.begin() + j);         
        }
        return ans;
    }
};