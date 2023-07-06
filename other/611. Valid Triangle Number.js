/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
   nums = nums.sort((a,b)=>{return a-b});
  let count=0
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1,r=nums.length-1; j < nums.length - 1; j++) {
    //  console.log(i+ ' '+j+' '+r)
    r=nums.length-1
     
     
        while(r!=j){
          if(nums[i]+nums[j]>nums[r]){
                        count++;
            r--

          }
          else{
            r--

          }
            // console.log(nums[i]+ ' '+nums[j]+' '+nums[r])
          


        }
        // continue
        
    }
  }
  return count;
};