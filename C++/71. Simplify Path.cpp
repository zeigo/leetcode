// 先split，".."向上一级，"."当前
class Solution {
public:
    string simplifyPath(string path) {
        string ans, tmp;
        vector<string> stk;
        stringstream ss(path);
        while(getline(ss, tmp, '/')) {
            if(tmp == "." || tmp == "") continue;
            if(tmp != "..")
                stk.push_back(tmp);
            else if(!stk.empty())
                stk.pop_back();
       }
       for(auto str : stk) {
           ans += "/" + str;
       }
       return stk.empty() ? "/" : ans;
    }
};