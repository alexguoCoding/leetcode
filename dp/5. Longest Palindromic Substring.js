/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let result=new Array(s.length).fill("-1").map(()=>new Array(s.length).fill("-1"));
    let max=0;
    // result[1][2]==false;
     output="";
    for(let i=0;i<s.length;i++){
        result[i][i]=true;
        output=s[i];
        max=1;

    }
    for(let j=1;j<s.length;j++){
 
        for(let i=0;i<j;i++){
            if(s[i]!=s[j]){
                 
                result[i][j]=false;
               // console.log(result[i][j])
            }
            else{
                if(j-i+1<=3){
                    result[i][j]=true;

                }
                else{
                   
                    result[i][j]=result[i+1][j-1];

                }
            }
            if( result[i][j]){
                if(j-i+1>=max){
                    max=j-i+1;
                    output=s.slice(i,j+1);

                }
            }

        }

    }
    // console.log(result)
    return output;
};