class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        int count=0;
        Arrays.sort(intervals,new Comparator<int[]>(){
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0]-o2[0];
            }
        });
        int savefront=intervals[0][0];
        int saveend=intervals[0][1];
        int nextfront,nextend;
        for(int i=0;i<intervals.length-1;i++){
            nextfront=intervals[i+1][0];
            nextend=intervals[i+1][1];
            if(savefront==nextfront){
                if(saveend<nextend){

                    count++;
                }

                else{
                    saveend=nextend;

                    count++;
                }

            }
            else {
                
                if(saveend>nextfront){
                    if(saveend>nextend){
                        saveend=nextend;
                        savefront=nextfront;
                        count++;
                    }
                    else  {
                        count++;

                    }

                }
                else{
                     savefront=nextfront;
                     saveend=nextend;
                 }
            }

        }
        return count;
        
        
    }
}