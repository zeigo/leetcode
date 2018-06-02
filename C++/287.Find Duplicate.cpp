// 不要求空间O(1)时，可用sort找连续重复，或者使用set
// 笼子1~n-1，要放入n只鸽子，有一个笼子超过一只，设这个笼子在low~high之间，
// 中间为mid。若1~mid中放入超过mid只，则low~mid其中有一个超出，
// 否则在mid+1到high有超出
// binary search O(nlgn)
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int low = 1, high = nums.size() - 1;
        while(low < high) {
            int mid = (low + high) / 2, cnt = 0;
            for(int x : nums) {
                if(x <= mid) cnt++; // 求笼子1~mid中鸽子个数
            }
            if(cnt <= mid) low = mid + 1;
            else high = mid;
        }
        return low;
    }
};

// O(n) cycle detection 