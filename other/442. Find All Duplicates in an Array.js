/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result=[];
    for(let i =0;i<nums.length;i++){
        if(nums[Math.abs(nums[i])-1]<0){
         
            result.push(Math.abs(nums[i]))

        }
        nums[Math.abs(nums[i])-1]=-nums[Math.abs(nums[i])-1]

    }
    return result
    
};