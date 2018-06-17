// 分最后一家抢或不抢，设各家为0~n-1
// 不抢时，去掉n-1影响，相当于线性0~n-2
// 抢时，0和n-2不抢，相当于线性1~n-2 + nums.back()
class Solution {
    typedef vector<int>::iterator vit;
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if(n == 0) return 0;
        if(n == 1) return nums.front();
        if(n == 2) return max(nums.front(), nums.back());
        int r1 = liner_rob(nums.begin(), nums.end() - 1),
            r2 = liner_rob(nums.begin() + 1, nums.end() - 2) + nums.back();
        return max(r1, r2);
    }
private:
    int liner_rob(vit b, vit e) {
        int _rob = 0, not_rob = 0;
        for(vit it = b; it < e; it++) {
            int tmp = _rob;
            _rob = not_rob + (*it);
            not_rob = max(not_rob, tmp);
        }
        return max(_rob, not_rob);
    }
};