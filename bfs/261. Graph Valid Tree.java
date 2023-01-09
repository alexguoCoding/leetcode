class Solution {

    private void dfs(int start, Set<Integer> visit, ArrayList<ArrayList<Integer>> lists) {
        if (!visit.contains(start)) {
            visit.add(start);
            for (int i = 0; i < lists.get(start).size(); i++) {
                dfs(lists.get(start).get(i), visit, lists);
            }
        }
    }

    private boolean checkoneBoolean(int[] degrees) {
        for (int i = 0; i < degrees.length; i++) {
            if (degrees[i] == 1) {
                return true;
            }
        }
        return false;

    }

    private int checkone(int[] degrees) {
        for (int i = 0; i < degrees.length; i++) {
            if (degrees[i] == 1) {
                return i;
            }
        }
        return -1;

    }

    public boolean validTree(int n, int[][] edges) {

        ArrayList<ArrayList<Integer>> lists = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            lists.add(new ArrayList<>());
        }
        Set<Integer> visit = new HashSet<>();
        for (int i = 0; i < edges.length; i++) {
            lists.get(edges[i][0]).add(edges[i][1]);
            lists.get(edges[i][1]).add(edges[i][0]);
        }
        int[] degrees = new int[n];

        dfs(0, visit, lists);
        for (int i = 0; i < lists.size(); i++) {
            degrees[i] = lists.get(i).size();

        }

        while (checkoneBoolean(degrees)) {
            int j = checkone(degrees);
            System.out.println(j);
            degrees[j] = 0;
            for (int i = 0; i < lists.get(j).size(); i++) {
                degrees[lists.get(j).get(i)]--;
            }

        }
        for (int i = 0; i < degrees.length; i++) {
            if (degrees[i] >= 1) {

                return false;
            }

        }

        if (visit.size() == n) {
            return true;
        } else {
            return false;
        }
    }
}
