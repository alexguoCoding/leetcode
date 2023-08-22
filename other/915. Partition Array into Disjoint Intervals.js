/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    let l=nums.length
    let leftmost=new Array(l).fill(-1)
    
    leftmost[0]=nums[0]
       
    for(let i=1;i<l;i++){
        leftmost[i]=Math.max(leftmost[i-1],nums[i])
    }
     console.log(leftmost)
    let rightmin=new Array(l).fill(-1)
    rightmin[l-1]=nums[l-1]
    for(let i=l-2;i>=0;i--){
        rightmin[i]=Math.min(rightmin[i+1],nums[i])
    }
     console.log(rightmin)
     for(let i=0;i<l-1;i++){
         if( leftmost[i]<=rightmin[i+1]){
             return i+1
         }
     }

    
};