/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let dp=new Array(n+1).fill(0).map(()=>new Array(target+1).fill(0))
     dp[0][0]=1
     //console.log(dp)

    //dp[i][j] i dice j val
    for(let i=1;i<=n;i++){
        for(let j=0;j<=target;j++){
            for(let a=1;a<=k;a++){
                if(j>=a){
                    dp[i][j]=(dp[i-1][j-a]+ dp[i][j])%(10**9+7)

                }
                 
            }
           

        }
    }
    return dp[n][target]
    
};