/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let l1=s1.length
     let l2=s2.length
     let dp=new Array(l1+1).fill(false).map(()=>(new Array(l2+1).fill(false)))
     dp[0][0]=true
     if((l1+l2)!=s3.length){
         return false

     }
    for(let i=1;i<=l1;i++){
         if(s1[i-1]==s3[i-1]){
             dp[i][0]=dp[i-1][0]
         }
    }
    for(let j=1;j<=l2;j++){
         if(s2[j-1]==s3[j-1]){
             dp[0][j]=dp[0][j-1]
         }
    }
     for(let i=1;i<=l1;i++){
          for(let j=1;j<=l2;j++){
              let k=i+j-1
               if(s1[i-1]==s2[j-1]&&s1[i-1]==s3[k]){
                    dp[i][j]=dp[i-1][j]||dp[i][j-1]
              }
              else if(s1[i-1]==s3[k]){
                  dp[i][j]=dp[i-1][j]
              }
              else if(s2[j-1]==s3[k]){
                  dp[i][j]=dp[i][j-1]
              }
  
            //   console.log(i+' '+j)
            //   console.log(dp)
             

              

          }
     }


        



    

    return dp[l1][l2]
    
};