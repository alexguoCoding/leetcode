class Solution {
    int[][] dir = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
    int[][] record;
    int height;
    int width;

    public void solve(char[][] board) {
        height = board.length;
        width = board[0].length;
        record = new int[height][width];

        for (int i = 0; i < height; i++) {
            if (board[i][0] == 'O') {
                record[i][0] = 1;
                dfs(i, 0, board);
            }
            if (board[i][width - 1] == 'O') {
                record[i][width - 1] = 1;
                dfs(i, width - 1, board);
            }
        }
        for (int i = 0; i < width; i++) {
            if (board[0][i] == 'O') {
                record[0][i] = 1;
                dfs(0, i, board);
            }
            if (board[height - 1][i] == 'O') {
                record[height - 1][i] = 1;
                dfs(height - 1, i, board);
            }
        }

        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                // System.out.println(record[i][j]);
                if (record[i][j] != 1) {
                    board[i][j] = 'X';
                }
            }
        }
    }

    public void dfs(int m, int n, char[][] board) {
        int originM = m;
        int originN = n;
        for (int[] direction : dir) {
            m = originM;
            n = originN;

            m += direction[0];
            n += direction[1];

            if (m >= 0 && m < height && n >= 0 && n < width && board[m][n] == 'O' && record[m][n] == 0) {
                record[m][n] = 1;
                // System.out.print("m" + m);
                // System.out.println("n" + n);
                dfs(m, n, board);
            }
        }
    }
}
