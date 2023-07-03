/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    let l1=nums1.length;
     let l2=nums2.length;
     let dp=new Array(l1+1).fill(Number.NEGATIVE_INFINITY).map(()=>(new Array(l2+1).fill(Number.NEGATIVE_INFINITY)))

    for(let i=1;i<=l1;i++){
         for(let j=1;j<=l2;j++){
            
             dp[i][j]=Math.max(nums1[i-1]*nums2[j-1]+ dp[i-1][j-1],dp[i-1][j],dp[i][j-1],nums1[i-1]*nums2[j-1])
         }
    }
    return dp[l1][l2]

    
    
};