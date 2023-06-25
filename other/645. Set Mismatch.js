/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let l=nums.length;
    let newArray=[...nums]
    for(let i =0;i<l;i++){
        newArray.push(i+1)
    }
   
    let lowbit=0;
    for(let i of newArray){
        lowbit^=i;
    }
    let num1=0;
    let num2=0;

    lowbit=lowbit&(-lowbit)
    for(let i of newArray){
        if(lowbit&i){
            num1^=i

        }
        else{
            num2^=i
        }
    }
    for(let i of nums){
        if(num1==i){
            return [num1,num2]
        }
    }
     return [num2,num1]


};