/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
        let presum=0;
 
        
        let map=new Map();
        map.set(0,1)
        let count=0;
        for(let i=0;i<nums.length;i++){
            
            presum= presum+nums[i];
            console.log(presum-k)
            if(map.has(presum-k)){
                count+=map.get(presum-k);


            }
            if(map.has(presum)){
                map.set(presum,map.get(presum)+1)
            }
            else{
                map.set(presum,1)
            }

        }
        return count;
    
};