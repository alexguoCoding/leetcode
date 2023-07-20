/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let sorted=[...nums].sort((a,b)=>a-b);
  
    let left = -1;
    //console.log(sorted)
    // console.log(nums)
  
    for (let i = 0; i < nums.length; i++) {
       //console.log(nums[i],sorted[i])
      if (nums[i] != sorted[i]) {
       
        left = i ;
        break;
      }
    }
    if(left==-1){
      return 0
  
    }
    let right = 0;
    for (let i = nums.length-1; i >=0; i--) {
      if (nums[i] != sorted[i]) {
        right = i;
        break;
      }
    }
     //console.log(left,right)
    let result=right-left+1
    return result
  };
  