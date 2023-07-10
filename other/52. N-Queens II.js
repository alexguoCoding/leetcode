/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result=new Array(n).fill(0).map(()=>new Array(n).fill(0))
   

    let count=0;
     let check=function(row,col){
         for(let i=0;i<row;i++){
             if(result[i][col]==1){
                 return false
             }
         }
         let temprow=row
          let tempcol=col
         while(temprow<n&&tempcol<n&&temprow>=0&&tempcol>=0){
             if(result[temprow][tempcol]==1){
                 return false

             }
             temprow--;
             tempcol++
         }

          temprow=row
           tempcol=col
         while(temprow<n&&tempcol<n&&temprow>=0&&tempcol>=0){
             if(result[temprow][tempcol]==1){
                 return false

             }
             temprow--;
             tempcol--;
         }
         return true



     }
     
    let dfs=function(c){
        if(c==n){
            count++
           // console.log(result)
            return 
        }
        for(let col=0;col<n;col++){
            if(check(c,col)){
                result[c][col]=1
                dfs(c+1)
                result[c][col]=0

            }

        }
    }
    dfs(0)
    return count
    
};