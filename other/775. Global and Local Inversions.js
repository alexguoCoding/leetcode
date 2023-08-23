/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {

    let premax=new Array(nums.length).fill(0)
premax[0]=nums[0]
    for(let i=1;i<nums.length;i++){
        premax[i]=Math.max(nums[i], premax[i-1])
       


    }
   
    let globalcount=0
    for(let i=2;i<nums.length;i++){
        if(premax[i-2]>nums[i]){
            return false
        }
    }

    return true
    
};