/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map=new Map();
    let presum=0;
    let count=0;
       map.set(0,1)

    for(let i=0;i<nums.length;i++){
        presum+=nums[i];
        let mod=(presum%k+k)%k
       // console.log(presum%k)
        if(map.has(mod)){
            count+=map.get(mod)
            //console.log("s"+count)
            map.set(mod,map.get(mod)+1)
            

        }
        else{
            map.set(mod,1)

        }



    }
    return count;
};