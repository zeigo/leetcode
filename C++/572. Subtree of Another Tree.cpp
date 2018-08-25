/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// pre-order traverse，遍历s所有结点，看以该结点为根的子树是否与t相同
class Solution {
public:
    bool isSubtree(TreeNode* s, TreeNode* t) {
        return traverse(s, t);
    }
private:
    bool traverse(TreeNode *s, TreeNode *t) {
        if(!s) return false;
        return isSame(s, t) || traverse(s->left, t) || traverse(s->right, t);
    }
    bool isSame(TreeNode *s, TreeNode *t) {
        if(s == nullptr && t == nullptr) return true;
        if(s == nullptr || t == nullptr) return false;
        return s->val == t->val && isSame(s->left, t->left) && isSame(s->right, t->right);
    }
};