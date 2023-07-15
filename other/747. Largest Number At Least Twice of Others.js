/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max=-1
    let pos=-1
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            pos=i
            max=nums[i]

        }
        
        
    }
    for(let i of nums){
        if(i!=max&&i*2>max){
            return -1

        }
       
        
    }
    return pos 
    

    
};