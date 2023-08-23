/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let l=nums.length;
    let result=-1;
    for(let i=0;i<l;i++){
        for(let j=i+1;j<l;j++){
            if(test(nums[i],nums[j])){
                result=Math.max(result,nums[i]+nums[j])

            }
        }
    }
    return result
    
};
var test = function(n1,n2) {
    let tempn1=-1
    while(n1!=0){
    tempn1=Math.max(n1%10,tempn1)
    n1=Math.floor(n1/10)
    }
    let tempn2=-1
    while(n2!=0){
    tempn2=Math.max(n2%10,tempn2)
    n2=Math.floor(n2/10)
    }
    return tempn1==tempn2

}