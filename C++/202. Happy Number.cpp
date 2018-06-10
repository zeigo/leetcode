// 环检测，若能到1，则没有环，slow/fast在1相遇
class Solution {
public:
    bool isHappy(int n) {
        int slow = n, fast = n;
        do {
            slow = digit_square_sum(slow);
            fast = digit_square_sum(fast);
            fast = digit_square_sum(fast);
        } while(slow != fast);
        return fast == 1;
    }
private:
    int digit_square_sum(int x) {
         int sum = 0, rem;
        while(x) {
            rem = x % 10;
            sum += rem * rem;
            x /= 10;
        }
        return sum;
    }
};
