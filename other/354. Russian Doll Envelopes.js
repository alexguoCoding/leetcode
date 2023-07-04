/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {

    envelopes=envelopes.sort((a,b)=>{
        if(a[0]!=b[0]){
            return a[0]-b[0]
        }
        else{
            return b[1]-a[1]
        }
    })
    let l=envelopes.length
    let dp=new Array(l).fill(1)
    for(let i=0;i<l;i++){
        for(let j=0;j<i;j++){
                if(envelopes[i][1]>envelopes[j][1]){
                    dp[i]=Math.max(dp[i],dp[j]+1)
                }
            }

    }
    let result=0;
    for(let i of dp){
       result=Math.max(result,i)

    }
    return result
};