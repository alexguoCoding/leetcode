/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map=new Map();
    for(let num of nums){
        if(!map.has(num)){
            map.set(num,1)
        }
        else{
             map.set(num, map.get(num)+1)
        }
    }
    for(let [key,val] of map){
        if(val>=nums.length/2){
            return key;
        }

    }
    
};