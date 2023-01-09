class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, new Comparator<int[]>() {
            public int compare(int[] interval1, int[] interval2) {
                return interval1[0] - interval2[0];
            }

        });
        List<int[]> result = new ArrayList<>();
        int i = 0;
        while (i < intervals.length) {
            int[] add = new int[2];
            add[0] = intervals[i][0];
            add[1] = intervals[i][1];
            i++;
            while (i < intervals.length && add[0] <= intervals[i][0] && intervals[i][0] <= add[1]) {
                if (add[1] < intervals[i][1]) {
                    add[1] = intervals[i][1];
                }
                i++;
            }

            System.out.println(i);
            result.add(add);

        }
        int[][] arr = new int[result.size()][2];

        return result.toArray(arr);

    }
}