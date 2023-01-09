/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let record=new Array(s.length).fill(false).map(()=>new Array(s.length).fill(false));
    let count=0;

    for(let j=0;j<s.length;j++){
         for(let i=0;i<=j;i++){
             if(s[i]!=s[j]){
                 record[i][j]=false;
             }
             else{
                 if(j-i+1<=3){
                     record[i][j]=true;
                 }
                 else{
                      record[i][j]=record[i+1][j-1];
                 }
                 if(record[i][j]){
                     count++;
                 }
             }
         }


    }
    return count;
    
};