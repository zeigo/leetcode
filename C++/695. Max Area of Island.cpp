class Solution {
  private:
    int n; // row
    int m; // column
  public:
    int maxAreaOfIsland(vector<vector<int>> &grid) {
        n = grid.size();
        if (n == 0)
            return 0;
        m = grid[0].size();
        int maxArea = 0, area;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    area = 0;
                    explore(i, j, grid, area);
                    maxArea = max(area, maxArea);
                }
            }
        }
        return maxArea;
    }

  private:
    void explore(int i, int j, vector<vector<int>> &grid, int &area) {
        if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] == 0)
            return;
        grid[i][j] = 0; // 访问过的直接置0，不用单独记录visited
        area++;
        explore(i - 1, j, grid, area); // 上
        explore(i + 1, j, grid, area); // 下
        explore(i, j - 1, grid, area); // 左
        explore(i, j + 1, grid, area); // 右
    }
};