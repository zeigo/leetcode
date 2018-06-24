/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// dfs,当需要记录路径情况时，典型的backtrack
class Solution {
  public:
    vector<vector<int>> pathSum(TreeNode *root, int sum) {
        vector<vector<int>> res;
        if (!root)
            return res;
        vector<int> path;
        helper(res, path, sum, root);
        return res;
    }

  private:
    void helper(vector<vector<int>> &res, vector<int> &path, int sum, TreeNode *p) {
        // 预先已确保p不为空
        path.push_back(p->val);
        if (p->left == NULL && p->right == NULL) {
            if (accumulate(path.begin(), path.end(), 0) == sum) {
                res.push_back(path);
            }
        }
        if (p->left)
            helper(res, path, sum, p->left);
        if (p->right)
            helper(res, path, sum, p->right);
        path.pop_back();
    }
};