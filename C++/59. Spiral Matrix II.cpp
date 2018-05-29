class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> matrix(n, vector<int>(n, 0));
        int e = 1, i, j, k;
        // top-left matrix[i][i] bottom-right matrix[j][j]
        for(i = 0, j = n - 1; i <= j; i++, j--) {
            for(k = i; k < j; k++) {
                matrix[i][k] = e++;
            }
            for(k = i; k < j; k++) {
                matrix[k][j] = e++;
            }
            for(k = j; k > i; k--) {
                matrix[j][k] = e++;
            }
            for(k = j; k > i; k--) {
                matrix[k][i] = e++;
            }
        } 
        if(n % 2 == 1) matrix[i][i] = e; // n为奇数时，填充中心元素
        return matrix;
    }
};