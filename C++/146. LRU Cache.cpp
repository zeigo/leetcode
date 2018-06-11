// 新访问的放到list最后，替换时取最前的
class LRUCache {
private:
    int capacity;
    unordered_map<int, pair<int, list<int>::iterator>> data;
    list<int> visited;
    void update(int key) {
        visited.splice(visited.end(), visited, data[key].second);
        data[key].second = --visited.end();
    }
public:
    LRUCache(int capacity) : capacity(capacity) {}
        
    int get(int key) {
        if(data.find(key) == data.end()) return -1;
        update(key);
        return data[key].first;
    }
    
    void put(int key, int value) {
        if(data.find(key) == data.end()) {
            if(visited.size() == capacity) { // evict lru
                data.erase(visited.front());
                visited.pop_front();
            }
            visited.push_back(key);
            data[key] = make_pair(value, --visited.end());
        } else {
            update(key);
            data[key].first = value;
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */