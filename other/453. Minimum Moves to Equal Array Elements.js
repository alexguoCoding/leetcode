/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let minNum=Number.POSITIVE_INFINITY;
    for(let i of nums){
        minNum=Math.min(minNum,i)
    }
    //console.log(minNum)
    let count=0;
    for(let i of nums){
        count=count+(i-minNum)
    }
    return count
    