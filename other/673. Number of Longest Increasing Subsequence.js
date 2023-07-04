/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    l=nums.length
    let dp=new Array(l).fill(1)
     let count=new Array(l).fill(1)
     let maxl=1;
    
    for(let i=0;i<l;i++){
         for(let j=0;j<i;j++){
             if(nums[i]>nums[j]){
                 if(dp[j]+1>dp[i]){
                     dp[i]=dp[j]+1
                     count[i]=count[j]
                    

                 }
                 else if(dp[j]+1==dp[i]){
                      count[i]=count[j]+count[i];
                 }
                 maxl=Math.max(dp[i],maxl)
             
                
                 
                



             }

         }
    }
    // console.log(dp)
    //    console.log(count)

    let final=0
    for(let i=0;i<l;i++){
       if(dp[i]==maxl){
           final+=count[i]


       }
    }

  

    return final;

    
};