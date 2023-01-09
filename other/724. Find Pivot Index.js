/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftsum=new Array(nums.length).fill(0);
    let rightsum=new Array(nums.length).fill(0);
    let sum=0;
    for(let i=0;i<nums.length;i++){
      
        leftsum[i]=sum;
        sum+=nums[i];
    }
    sum=0;
    for(let i=nums.length-1;i>=0;i--){
        
        rightsum[i]=sum;
        sum+=nums[i];
    }
    // console.log(rightsum);
    // console.log(leftsum);
    for(let i=0;i<nums.length;i++){
        if(rightsum[i]-leftsum[i]==0){
            return i;

        }

    }
    return -1;
    
};