class Solution {
public:
    bool isSubsequence(string s, string t) {
        string::size_type start = 0;
        for(int i = 0; i < s.size(); i++) {
            auto pos = t.find(s.substr(i, 1), start);
            if(pos == string::npos) {
                return false;
            } else {
                start = pos + 1;
            }
        }
        return true;
    }
};