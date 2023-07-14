/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    let num=nums.sort((a,b)=>a-b)
    console.log(num)
    let mid=Math.floor((0+num.length-1)/2)
    let count=0
    for(let i of nums){
        count+=Math.abs(nums[mid]-i)


    }
    return count
};