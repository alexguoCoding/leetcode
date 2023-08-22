/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {

    arr=[[4,6],[6,8],[7,9],[4,8],[3,9,0],[],[1,7,0],[2,6],[1,3],[2,4]]
    
   console.log(arr)
   let dp=new Array(n+1).fill(0).map(()=>new Array(10).fill(0))

       for(let j=0;j<=9;j++){
         
                dp[1][j]=1
   

       }
   
console.log(arr[1][1])
   for(let i=2;i<=n;i++){
       for(let j=0;j<=9;j++){
            for(let k=0;k<arr[j].length;k++){
               
                dp[i][j]+=dp[i-1][arr[j][k]]
               //  console.log(i+" "+j+" "+k+" "+arr[j][k])

                
            }
            dp[i][j]=dp[i][j]%(Math.pow(10,9)+7)
          //   console.log(i+" "+j+" "+dp[i][j])

       }
   }
   let result=0
       for(let j=0;j<=9;j++){
         
                result+=dp[n][j]
                result=result%(Math.pow(10,9)+7)
   

       }
    return result
};