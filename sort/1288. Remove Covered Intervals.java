class Solution {
    public int removeCoveredIntervals(int[][] intervals) {
        Arrays.sort(intervals,new Comparator<int[]>(){
            public int compare(int[] interval1,int[] interval2){
                return interval1[0]-interval2[0];
            }

        });
        int removeNum=0;
        int[] current=new int[2];
        current[0]=intervals[0][0];
        current[1]=intervals[0][1];

    
        for(int i=1;i<intervals.length;i++){
             //System.out.println(removeNum);
              //System.out.println(intervals[i][0]);
              // System.out.println(current[0]);
            if(current[0]>=intervals[i][1]){
                 removeNum++;
                    current[1]=intervals[i][1];
                    current[0]=intervals[i][0];

            }
            else if(intervals[i][0]==current[0]){
                if(intervals[i][1]<=current[1]){
                    removeNum++;

                }
                else{
                    current[1]=intervals[i][1];
                     removeNum++;

                }


            }
            else if(intervals[i][0]>current[0]){
                 System.out.println(removeNum);
                if(intervals[i][1]>current[1]){
                    current[1]=intervals[i][1];
                    current[0]=intervals[i][0];

                }
                else{
                    removeNum++;
                   // System.out.println(removeNum);
                }

            }



        }
        return intervals.length-removeNum;
    }
}