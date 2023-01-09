class Solution {
    int[][] diretion = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
    int[] ocean = { 0, 0 }; // top left meet first1
    int height;
    int width;
    int[][] record;

    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> result = new LinkedList<>();
        height = heights.length;
        width = heights[0].length;
        record = new int[height][width];

        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                ocean[0] = 0;
                ocean[1] = 0;
                int[][] visit = new int[height][width];

                visit[i][j] = 1;
                dfs(i, j, heights, ocean, visit);
                if (ocean[0] == 1 && ocean[1] == 1) {
                    record[i][j] = 1;
                    Integer[] numbers = new Integer[] { i, j };
                    List<Integer> list = Arrays.asList(numbers);

                    result.add(list);
                }
            }
        }
        return result;
    }

    public void dfs(int m, int n, int[][] heights, int[] ocean, int[][] visit) {
        for (int[] dir : diretion) {
            int newM = m + dir[0];
            int newN = n + dir[1];
            if (newM == -1 || newN == -1) {
                ocean[0] = 1;
            }
            if (newM == height || newN == width) {
                ocean[1] = 1;
            }

            if (newM >= 0 && newM < height && newN >= 0 && newN < width && heights[m][n] >= heights[newM][newN]
                    && visit[newM][newN] == 0) {
                visit[newM][newN] = 1;
                if (record[newM][newN] == 1) {
                    ocean[0] = 1;
                    ocean[1] = 1;
                    break;
                } else {
                    dfs(newM, newN, heights, ocean, visit);
                }
            }
        }
    }
}
