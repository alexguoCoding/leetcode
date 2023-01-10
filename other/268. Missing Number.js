/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let num=new Array(nums.length+1).fill(0);
    for(n of nums){
        num[n]=1;
    }
    console.log(num)
    for(let i=0;i<num.length;i++){
       if(num[i]==0){
           return i;

       }
    }
};