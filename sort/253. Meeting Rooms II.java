class Solution {
    public int minMeetingRooms(int[][] intervals) {
       
    // Arrays.sort(intervals,new Comparator<int []>(){
    //     public int compare(int[] interval1,int[] interval2) {
    //         return interval1[0]-interval2[0];
    //     }        
    //     });
    // }
    int max=0;
    for(int i=0;i<intervals.length;i++){
        if(intervals[i][1]>max){
            max=intervals[i][1];
        }


    }
    
    int[] list=new int[max];
    for(int i=0;i<intervals.length;i++){
        for(int j=intervals[i][0];j<intervals[i][1];j++){
            list[j]=list[j]+1;
        }

    }
    int result=0;
    for(int k=0;k<max;k++){
        if(list[k]>result){
            result=list[k];
        }
 


    }

    return  result;
    }

}