/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
           let preodd=0;
           let count=0;
           let map=new Map();
             map.set(0,1)


        for(let i=0;i<nums.length;i++){
            if(nums[i]%2==1){
                preodd++;
            }

            if(map.has(preodd)){
                map.set(preodd,map.get(preodd)+1)
            }
            else{
                map.set(preodd,1)
            }
            if(map.has(preodd-k)){
                
                count+=map.get(preodd-k)
            }
        

        }
        return count;
    
};