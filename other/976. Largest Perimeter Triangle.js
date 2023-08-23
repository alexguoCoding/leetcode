/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let l=nums.length
    for(let i=l-1;i>=0;i--){
        if(nums[i-2]+nums[i-1]>nums[i]){
            return nums[i-2]+nums[i-1]+nums[i]
        }

    }
    return 0
    
};