/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length==0){
        return true; 
    }
 
   
 
     intervals.sort((a,b)=> a[0]-b[0]);
      arr=intervals[0];
      console.log(intervals);
     for(let i=1;i<intervals.length;i++){
         if(arr[1]>intervals[i][0]){
            
            return false;
         }
         arr[0]=intervals[i][0];
          arr[1]=intervals[i][1];
 
 
 
 
 
     }
         
 
     return true;
 
 };