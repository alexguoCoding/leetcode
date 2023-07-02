/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  
    let lastday=days[days.length-1]
    let dp=new Array(lastday+1)
    dp[0]=0
    let set=new Set()
    // console.log(lastday)
    // console.log(dp)
    for(let a of days){
        set.add(a)
    }

    for(let i=1;i<=lastday;i++){
        if( set.has(i)){
            if(i>=30){
                dp[i]=Math.min(dp[i-1]+costs[0],Math.min(dp[i-7]+costs[1],dp[i-30]+costs[2]))

            }
            else if(i>=7){
                dp[i]=Math.min(dp[i-1]+costs[0],Math.min(dp[i-7]+costs[1],costs[2]))

            }
            else{
                dp[i]=Math.min(dp[i-1]+costs[0],Math.min(costs[1],costs[2]))
            }
            
        }
        else{
            dp[i]=dp[i-1]
        }

       

    }
    return dp[lastday]
    
};