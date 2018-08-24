/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
// reverse in-order traversal，已经过的结点val之和记为sum。
// 每经过一个结点，sum += val，val = sum
class Solution {
public:
    TreeNode* convertBST(TreeNode* root) {
        int sum = 0; 
        sumOfGreat(root, sum);
        return root;
    }
private:
    void sumOfGreat(TreeNode* root, int& sum) {
        if(root != nullptr) {
            sumOfGreat(root->right, sum);
            root->val += sum;
            sum = root->val;
            sumOfGreat(root->left, sum);
        }
    }
   
};