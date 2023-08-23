/**
 * @param {number} n
 * @param {number[][]} offers
 * @return {number}
 */
var maximizeTheProfit = function(n, offers) {
  let dp=new Array(n+1).fill(0)
  let save=new Array(n+1)
for (let i = 0; i < save.length; i++) {
  save[i] = new Array(); // Initialize each row as an empty array
}
 for(let j=0;j<offers.length;j++){
save[offers[j][1]].push([offers[j][0],offers[j][2]])
     
    }
  //console.log(save)

 

  for(let i=1;i<=n;i++){
    dp[i]=dp[i-1]
    for(let s of save[i-1]){
 
         dp[i]=Math.max(dp[i],dp[s[0]]+s[1])
         }
     

  }
  return dp[n]
    
};