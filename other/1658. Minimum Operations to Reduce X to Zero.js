/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    
let sum=0;
for(let i of nums){
    sum+=i;

}
let target=sum-x
let temp=0
let max=-1
for(let r =0,l=0;r<nums.length;r++){
    temp+=nums[r]
    while(temp>target&&l<=r){
        temp-=nums[l]
        l++;
    }
    if(temp<target){
        continue

    }
    else if(temp==target){
        max=Math.max(max,r-l+1)
    }
    


}
if(max==-1){
    return -1
}else{
    return nums.length-max


}
