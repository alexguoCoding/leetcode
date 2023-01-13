/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let  decstack=[];
    let result=new Array(nums.length).fill(-1);
    for(let i=0;i<2*nums.length-1;i++){
        let pos=i%nums.length;
    while(decstack.length>0&&nums[pos]>nums[decstack[decstack.length-1]]){
        result[decstack[decstack.length-1]]=nums[pos];

        decstack.pop();


    }
    decstack.push(pos)

    }
    return result;
    

};