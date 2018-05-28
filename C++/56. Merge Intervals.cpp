/**
 * Definition for an interval.
 * struct Interval {
 *     int start;
 *     int end;
 *     Interval() : start(0), end(0) {}
 *     Interval(int s, int e) : start(s), end(e) {}
 * };
 */
// 先排序再合并 O(nlgn)
class Solution {
public:
    vector<Interval> merge(vector<Interval>& intervals) {
        vector<Interval> ans;
        if(intervals.empty()) return ans;
        sort(intervals.begin(), intervals.end(), [](Interval a, Interval b){return a.start < b.start;});
        ans.push_back(intervals[0]);
        for(decltype(intervals.size()) i = 1; i < intervals.size(); i++) {
            if(intervals[i].start <= ans.back().end) {
                ans.back().end = max(ans.back().end, intervals[i].end);
            } else {
                ans.push_back(intervals[i]);
            }
        }
        return ans;    
    }
};