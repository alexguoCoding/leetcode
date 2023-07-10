/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result=new Array(n).fill('.').map(()=>new Array(n).fill('.'))


    console.log()
    let final=[]
    
     let check=function(row,col){
         for(let i=0;i<row;i++){
             if(result[i][col]=='Q'){
                 return false
             }
         }
         let temprow=row
          let tempcol=col
         while(temprow<n&&tempcol<n&&temprow>=0&&tempcol>=0){
             if(result[temprow][tempcol]=='Q'){
                 return false

             }
             temprow--;
             tempcol++
         }

          temprow=row
           tempcol=col
         while(temprow<n&&tempcol<n&&temprow>=0&&tempcol>=0){
             if(result[temprow][tempcol]=='Q'){
                 return false

             }
             temprow--;
             tempcol--;
         }
         return true



     }
     
    let dfs=function(c){
        if(c==n){
            
             final.push( JSON.parse(JSON.stringify(result)) )
             return
        }
        for(let col=0;col<n;col++){
            if(check(c,col)){
                result[c][col]='Q'
                dfs(c+1)
                result[c][col]='.'

            }

        }
    }
    dfs(0)
   // console.log(final)
    //console.log("666")
    let finalstr=new Array(final.length).fill(null).map(()=>new Array(n).fill(null))
    //console.log(finalstr)
    for(let i=0;i<final.length;i++){
        
        //console.log(final[i])
        for(let j=0;j<n;j++){
            let substr=""
             for(let k=0;k<n;k++){
                 substr=substr+final[i][j][k]
             }
             //console.log(substr)
            
             finalstr[i][j]=substr
            
        }
        
        // console.log(substr)

    }
    return finalstr
    
};