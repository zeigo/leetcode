/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// post-order
class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int maxDiameter = 0; 
        maxDepth(root, maxDiameter);
        return maxDiameter;
    }
private:
    int maxDepth(TreeNode *p, int &maxDiameter) {
        if(!p) return 0;
        int left = maxDepth(p->left, maxDiameter),
            right = maxDepth(p->right, maxDiameter);
        maxDiameter = max(maxDiameter, left + right + 1);
        return 1 + max(left, right);
    }
};