/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let left=new Array(nums.length).fill(1);
    let right=new Array(nums.length).fill(1);
    let result=new Array(nums.length).fill(1);
    leftpro=1;
    rightpro=1;
    for(let i=nums.length-1;i>=0;i--){
        right[i]=rightpro;
        rightpro=rightpro*nums[i];
    }
    for(let i=0;i<nums.length;i++){
        left[i]=leftpro;
        leftpro=leftpro*nums[i];
    }
    for(let i=0;i<nums.length;i++){
        result[i]=left[i]*right[i];

    }
    return result;


};