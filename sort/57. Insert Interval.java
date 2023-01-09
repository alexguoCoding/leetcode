class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result=new ArrayList<>();
        // int[] temp=new int[2];
        // temp[0]=intervals[0][0];
        //  temp[1]=intervals[0][1];
        // if(intervals.length==0){
        //     result.add(newInterval);

        // }
        boolean hasadd=false;
       for(int i=0;i<intervals.length;i++){

           if(intervals[i][1]<newInterval[0]){
                 result.add (intervals[i]);
                
           }
           else if(intervals[i][0]>newInterval[1]){
               if(hasadd==false){
                    result.add (newInterval);
                    hasadd=true;
               }
               
                result.add (intervals[i]);
                
                
           }
            else if(intervals[i][0]<=newInterval[0]){
               newInterval[0]=intervals[i][0];
               if(intervals[i][1]>=newInterval[1]){
                   newInterval[1]=intervals[i][1];
               }
           }
            else if(intervals[i][0]>=newInterval[0]){

               if(intervals[i][1]>=newInterval[1]){
                   newInterval[1]=intervals[i][1];
               }
           }

           
       }
               if(hasadd==false){
                    result.add (newInterval);
                    hasadd=true;
               }
        // for(int i=0;i<intervals.length;i++){
        //    if(intervals[i][1]<newInterval[0]){
        //         result.add (newInterval);
        //    }
        //     else if(intervals[i][0]<=newInterval[0]){
        //        newInterval[0]=intervals[i][0];
        //        if(intervals[i][1]>=newInterval[1]){
        //            newInterval[1]=intervals[i][1];
        //        }
        //    }
        // }

           int[][] output = new int[result.size()][2];
           result.toArray(output);
           return output;
    }
}