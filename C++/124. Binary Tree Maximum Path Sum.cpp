/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// 设结点n，以n为起点，从高往低（即从parent到child）延伸path长度最大为maxTopDown(n)，
// 设leftMax = maxTopDown(n.left), rightMax = maxTopDown(n.right)，
// 显然maxTopDown(n) = n.val + max(0, leftMax, rightMax)，
// 而以n为最高结点的path的最大长度maxAsPeak = max(n.val + left + right, maxTopDown(n))。
// 要找所有path的最大长度finalMax，只需DFS遍历所有结点，每经过一个结点n，通过递归计算出maxTopDown(n)，
// 并更新finalMax = max(finalMax, maxAsPeak(n))
class Solution {
public:
    int maxPathSum(TreeNode* root) {
        if(root == nullptr) return 0;
        int finalMax = root->val;
        maxPathTopDown(root, finalMax);
        return finalMax;
    }
private:
    int maxPathTopDown(TreeNode* node, int &finalMax) {
        if(node == nullptr) return 0;
        int leftMax = maxPathTopDown(node->left, finalMax),
            rightMax = maxPathTopDown(node->right, finalMax),
            maxTopDown = node->val + max(0, max(leftMax, rightMax));
        finalMax = max(finalMax, max(maxTopDown, node->val + leftMax + rightMax));
        return maxTopDown;
    }
};