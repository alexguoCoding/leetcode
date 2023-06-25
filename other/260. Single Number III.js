/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorAll=0;
    //console.log(xorAll)
    
    for(let i of nums){
        xorAll^=i;

    }
    let leftbit=xorAll&(-xorAll)
    let num1=0;
    let num2=0;

    for(let i of nums){
        
        if(leftbit&i){
            num1^=i
        }
        else{
            num2^=i
        }

    }
    return [num1,num2]

    console.log(leftbit)
    
};