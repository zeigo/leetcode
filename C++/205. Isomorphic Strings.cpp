// map[k] = v 记录k->v的映射，visited[v] = 1 记录已有字符映射到v
// 对比s,t同位置的k，v时，先看之前有没有记录k的映射，如果有map[k]，比较是否等于v，不等则false
// 若没有记录，看之前是否有其他元素映射到v，若有，则false
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int map[256] = {0}, visited[256] = {0};
        for(int i = 0; i < s.size(); i++) {
            char k = s[i], v = t[i];
            if(map[k]) {
                if(map[k] != v)
                    return false;
            } else {
                if(visited[v])
                    return false;
                map[k] = v;
                visited[v] = 1;
            }
        }
        return true;
    }
};