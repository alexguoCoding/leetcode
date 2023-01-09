/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {
    let record=new Array(s.length).fill(0).map(()=>new Array(s.length).fill(0));
    for(let j=0;j<s.length;j++){
         for(let i=j;i>=0;i--){
             if(s[i]==s[j]){
                 if(i==j){
                  record[i][j]=1;
                }
                else{
                    record[i][j]=record[i+1][j-1]+2;

                }


             }
             else{
                 record[i][j]=Math.max(record[i+1][j],record[i][j-1]);

             }
 


         }
    }
    return record[0][s.length-1];
};