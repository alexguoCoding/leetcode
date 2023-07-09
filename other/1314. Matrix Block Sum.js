**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let presum=new Array(mat.length+1).fill(0).map(()=>(new Array(mat[0].length+1).fill(0)))
   // console.log(presum)
    
    for(let i=1;i<=mat.length;i++){
         for(let j=1;j<=mat[0].length;j++){
             presum[i][j]=presum[i][j-1]+presum[i-1][j]-presum[i-1][j-1]+mat[i-1][j-1]
         }
    }
    
    console.log(presum)
    let result=new Array(mat.length).fill(0).map(()=>(new Array(mat[0].length).fill(0)))
    for(let i=1;i<=mat.length;i++){
         for(let j=1;j<=mat[0].length;j++){
             let leftmostx=j-k
             let rightmostx=j+k
             let topmosty=i-k
             let botmosty=i+k
             if(leftmostx<=1){
                 leftmostx=1
             }
             if(topmosty<=1){
                 topmosty=1
             }
             if(rightmostx>=mat[0].length+1){
                 rightmostx=mat[0].length
             }
             if(botmosty>=mat.length+1){
                 botmosty=mat.length
             }

                 result[i-1][j-1]=presum[botmosty][rightmostx]-presum[topmosty-1][rightmostx]-presum[botmosty][leftmostx-1]+presum[topmosty-1][leftmostx-1]

            // console.log(result)

             
         }
    }
    
    return result
};