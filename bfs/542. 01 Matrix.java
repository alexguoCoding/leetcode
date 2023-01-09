class Solution {
    int[][] direction = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
    int[][] result;
    int[][] visit;
    LinkedList<int[]> list = new LinkedList<>();

    public int[][] updateMatrix(int[][] mat) {
        int height = mat.length;
        int width = mat[0].length;
        result = new int[height][width];
        visit = new int[height][width];
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (mat[i][j] == 0) {
                    result[i][j] = 100;
                   
                }
            }
        }

        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (mat[i][j] == 0) {
                    result[i][j] = 0;
                    visit[i][j] = 1;
                    list.add(new int[] { i, j });
                }
            }
        }
        getmin(mat, width, height);
        return result;
    }

    public void getmin(int[][] mat, int width, int height) {
        int sum = 0;

        while (list.size() > 0) {
            int size = list.size();
            sum++;
            for (int k = 0; k < size; k++) {
                int[] start = list.removeFirst();

                int x = start[1];
                int y = start[0];
                // visit[y][x] = 1;

                for (int[] dir : direction) {
                    int newX = x + dir[1];
                    int newY = y + dir[0];

                    if (newX >= 0 && newY >= 0 && newX < width && newY < height && mat[newY][newX] == 1 && visit[newY][newX] == 0) {
                        //System.out.println("s");

                        result[newY][newX] = sum;
                        visit[newY][newX] = 1;

                        list.add(new int[] { newY, newX });
                    }
                }
            }
        }
    }
}
