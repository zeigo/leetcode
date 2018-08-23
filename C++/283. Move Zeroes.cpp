// 快慢指针，fast遍历nums，slow记录非零位置的个数
// 每发现非零，就把该值放到nums[slow]，slow++
// 最后[slow, nums.size())置0
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int fast = 0, slow = 0;
        for(; fast < nums.size(); fast++) {
            if(nums[fast] != 0) {
                nums[slow] = nums[fast];
                slow++;
            }
        }
        for(; slow < nums.size(); slow++) {
            nums[slow] = 0;
        }
    }
};