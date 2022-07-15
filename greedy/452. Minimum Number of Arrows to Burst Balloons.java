class Solution {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points,new Comparator<int[]>(){
            @Override
            public int compare(int[] o1, int[] o2) {
            if (o1[0] == o2[0]) return 0;
            if (o1[0] < o2[0]) return -1;
            return 1;
            }
        });
        int count=points.length;
        int savefront=points[0][0];
        int saveend=points[0][1];
        int nextfront=0;
        int nextend=0;
        for(int i=0;i<(points.length)-1;i++){
             nextfront=points[i+1][0];
              nextend=points[i+1][1];

            if(savefront<nextfront){
                if(saveend<nextfront){
                    savefront=nextfront;
                    saveend=nextend;

                }
                else {
                    if(saveend>=nextend){
                        savefront=nextfront;
                        saveend=nextend;
                        count--;
                        
                    }
                    else{
                        savefront=nextfront;
                        count--;
                    }

                }
            }
           else{
               if(saveend<=nextend){

                   count--;
                }
               else{
                   saveend=nextend;
                   count--;
                }
            }
        }
        return count;

        
    }
}