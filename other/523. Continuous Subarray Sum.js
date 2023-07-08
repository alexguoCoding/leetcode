/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {

    let map=new Map()
    let presum=new Array(nums.length+1).fill(0)

    for(let i=1;i<=nums.length;i++){
        presum[i]=   presum[i-1]+nums[i-1]
  
    }
    console.log(presum)
    for(let i=0;i<=nums.length;i++){
        let m=presum[i]%k
        //console.log(m)
      
       if(map.has(m)){

           if(i-map.get(m)>=2){
                 return true

           }
   

       }
       else{
           map.set(m,i)
       }
  
    }
return false
};