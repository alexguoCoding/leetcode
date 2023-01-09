class Solution {
  private void dfs(int start, List<List<Integer>> rooms, int[] visit) {
    visit[start] = 1;
    for (int i = 0; i < rooms.get(start).size(); i++) {
      if (visit[rooms.get(start).get(i)] == 0) {
        dfs(rooms.get(start).get(i), rooms, visit);
      }

    }

  };

  public boolean canVisitAllRooms(List<List<Integer>> rooms) {
    int roomsSize = rooms.size();
    int[] visit = new int[roomsSize];
    int count = 0;
    // for(int i=0;i<rooms;i++){

    // }
    for (int i = 0; i < roomsSize; i++) {
      if (visit[i] == 0) {
        count++;
        dfs(i, rooms, visit);
      }
    }
    // System.out.println(count);
    return count == 1 ? true : false;

  }
}