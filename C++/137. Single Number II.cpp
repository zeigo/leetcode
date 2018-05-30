// int有32位，sums中每位1出现的次数一定为3n或3n+1，
// 计算nums各自第i位的和sum，若mod3有余，只出现一次的数第i位即为1
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans = 0;
        for(int i = 0; i < 32; i++) {
            int sum = 0, mask = 1 << i;
            for(auto x : nums) {
                if(x & mask) sum++; // x第i位为1，sum++
            }
            if(sum % 3)
                ans |= mask; // ans第i位取1
        }
        return ans;
    }
};