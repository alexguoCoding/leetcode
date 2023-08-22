/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max=Number.NEGATIVE_INFINITY;
    let min=Number.POSITIVE_INFINITY;
    for(let i=0;i<nums.length;i++){
        max=Math.max(nums[i],max);
         min=Math.min(nums[i],min);

    }
    console.log(max,min);

    if(max-min<=2*k){
        return 0

    }
    else{
        return max-min-2*k;
    }
    
};