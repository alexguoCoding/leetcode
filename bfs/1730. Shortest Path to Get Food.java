class Solution {

    public int getFood(char[][] grid) {
        LinkedList<int[]> list = new LinkedList<>();
        int height = grid.length;
        int width = grid[0].length;
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (grid[i][j] == '*') {
                    list.add(new int[] { i, j });
                }
            }
        }
        int[][] diretions = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };
        int sum = 0;

        while (list.size() != 0) {
            int size = list.size();
            for (int i = 0; i < size; i++) {
                int[] point = list.removeFirst();
                int x = point[1];
                int y = point[0];
                grid[y][x] = 'X';
                for (int[] dir : diretions) {
                    int newx = x + dir[1];
                    int newy = y + dir[0];
                    if (newx >= 0 && newx < width && newy >= 0 && newy < height) {
                        if (grid[newy][newx] == '#') {
                            sum++;
                            return sum;
                        } else if (grid[newy][newx] == 'O') {
                            list.add(new int[] { newy, newx });
                            grid[newy][newx] = 'X';
                        } else if (grid[newy][newx] == 'X') {
                        } else if (grid[newy][newx] == '*') {
                            grid[newy][newx] = 'X';
                        }
                    }
                    // System.out.println(grid[newy][newx]);
                }
            }

            sum++;
        }
        return -1;
    }
}
