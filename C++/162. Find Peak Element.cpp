// 从nums[-1]到nums[0]为增，只需依次迭代，找到第一处下降的地方
// o(n)
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int n = nums.size();
        for(int i = 1; i < n; i++) {
            if(nums[i] < nums[i-1]) return i-1;
        }
        return n-1;
    }
};
// binary search o(lgn)
// 对于left到right的序列，当nums[left-1]<nums[left] && nums[right] > nums[right+1]
// 其中一定有peak
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        while(left < right) {
            int mid = (left + right) / 2;
            if(nums[mid] < nums[mid+1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
};