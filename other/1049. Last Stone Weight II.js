/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum=0;
    for(let i of stones){
        sum+=i
    }

    //console.log(sum)
    let half=Math.floor(sum/2)
    let n=stones.length
    let dp=new Array(n+1).fill(0).map(()=>(new Array(half+1).fill(0)))
    dp[0][0]=0;
    for(let i=1;i<=stones.length;i++){

        for(let j=0;j<=half;j++){
            if(j-stones[i-1]>=0){
                 dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-stones[i-1]]+stones[i-1])

            }
            else{
                 dp[i][j]=dp[i-1][j]
            }
           

        }


    }
    return sum-2*dp[n][half]
    
};