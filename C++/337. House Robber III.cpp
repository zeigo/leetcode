/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// 简单递归，计算_rob要算root->left->left等四个，计算not_rob时
// 要算root->left,root->right，有重复计算，耗时太长 1064ms
class Solution {
public:
    int rob(TreeNode* root) {
        if(!root) return 0;
        int not_rob = rob(root->left) + rob(root->right),
            _rob = root->val;
        if(root->left) {
            _rob += rob(root->left->left) + rob(root->left->right);
        }
        if(root->right) {
            _rob += rob(root->right->left) + rob(root->right->right);
        }
        return max(_rob, not_rob);
    }
};
// 可考虑hashtable缓存结果 14ms
class Solution {
public:
    int rob(TreeNode* root) {
        unordered_map<TreeNode*, int> hash;
        return helper(root, hash);
    }
private:
    int helper(TreeNode* p, unordered_map<TreeNode*, int> &hash) {
        if(!p) return 0;
        if(hash.find(p) != hash.end()) return hash[p];
        int not_rob = helper(p->left, hash) + helper(p->right, hash),
            _rob = p->val;
        if(p->left) {
            _rob += helper(p->left->left, hash) + helper(p->left->right, hash);
        }
        if(p->right) {
            _rob += helper(p->right->left, hash) + helper(p->right->right, hash);
        }
        hash[p] = max(_rob, not_rob);
        return hash[p];
    }
};

// bottom-up dp，多对一型 12ms
class Solution {
public:
    int rob(TreeNode* root) {
        auto p = helper(root);
        return max(p.first, p.second);
    }
private:
    // first抢该节点，second不抢该节点
    pair<int, int> helper(TreeNode* p) {
        if(!root) return make_pair(0, 0);
        auto p0 = helper(p.left);
        auto p1 = helper(p.right);
        int _rob = p.val + p0.second + p1.second,
            not_rob = max(p0.first, p0.second) + max(p1.first, p1.second);
        return make_pair(_rob, not_rob);
    }
};