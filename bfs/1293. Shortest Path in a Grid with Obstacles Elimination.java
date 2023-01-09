class Solution {
    public int shortestPath(int[][] grid, int k) {
        int height = grid.length;
        int width = grid[0].length;

        int[][] visit = new int[height][width];
        int[][] direction = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
        LinkedList<int[]> list = new LinkedList<>();
        int[] origin = {};
        int sum = 0;
        while (list.size != 0) {
            int size = list.size;
            for (int i = 0; i < size; i++) {
                int[] start = list.removeFirst();
                int x = start[1];
                int y = start[0];
                sum++;
                for (int[] dir : direction) {

                    int newx = x + dir[1];
                    int newy = y + dir[0];
                    if (newx >= 0 && newx < width && newy >= 0 && newy < height && path[newx][newy][0] > 0) {

                        if (grid[newx][newy] == 1) {
                            path[newx][newy][0]--;
                        }
                        list.add();

                    }
                }

            }

        }
        return path[height - 1][width - 1][0];

    }
}