/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result=new Array(nums.length).fill(0)
    let l=0;
    let r=nums.length-1
    let rR=nums.length-1

    while(l<=r){
        if(Math.pow(nums[l],2)>=Math.pow(nums[r],2)){
            
            result[rR]=Math.pow(nums[l],2)
            l++
            rR--
        }
        else{
            result[rR]=Math.pow(nums[r],2)
            rR--
            r--


        }

    }
    return result


    
};