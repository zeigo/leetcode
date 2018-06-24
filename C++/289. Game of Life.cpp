// tmp1缓存上一行即将的变化，tmp2缓存这一行即将的变化，处理board[i]后，
// 将tmp1应用到board[i-1]，tmp2更新到tmp1。相比复制整个board节省空间
// In-place可以使用更多种的标志，如2:live->die, 3:die->live
// 处理完这一行再捎带处理上一行
class Solution {
  public:
    void gameOfLife(vector<vector<int>> &board) {
        int m = board.size(), n = board[0].size();
        vector<int> tmp1(n), tmp2(n);
        for(int i = 0; i < m; i++) {
            process_line(board, i, tmp2);
            if(i != 0) {
                board[i - 1] = tmp1;
            }
            tmp1 = tmp2;
        }
        board[m - 1] = tmp1;
    }

  private:
    // 计算附近live的个数
    int count_live(vector<vector<int>> &board, int i, int j) {
        int cnt = 0, m = board.size(), n = board[0].size();
        if (i - 1 >= 0) { // 有上一行
            if (board[i - 1][j])
                ++cnt; // 正上
            if (j - 1 >= 0 && board[i - 1][j - 1])
                ++cnt; // 左上
            if (j + 1 < n && board[i - 1][j + 1])
                ++cnt; // 右上
        }
        if (i + 1 < m) { // 有下一行
            if (board[i + 1][j])
                ++cnt; // 正下
            if (j - 1 >= 0 && board[i + 1][j - 1])
                ++cnt; // 左下
            if (j + 1 < n && board[i + 1][j + 1])
                ++cnt; // 右下
        }
        if (j - 1 >= 0 && board[i][j - 1])
            ++cnt; // 正左
        if (j + 1 < n && board[i][j + 1])
            ++cnt; // 正右
        return cnt;
    }
    // 处理board[i],即将的变化存入tmp
    void process_line(vector<vector<int>> &board, int i, vector<int> &tmp) {
        int m = board.size(), n = board[0].size();
        for(int j = 0; j < n; j++) {
            int cnt = count_live(board, i, j);
            if(board[i][j]) {
                tmp[j] = (cnt < 2 || cnt > 3) ? 0 : 1;
            } else {
                tmp[j] = cnt == 3 ? 1 : 0;
            }
        }
    }
};