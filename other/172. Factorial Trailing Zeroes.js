/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count=0;
    for( let i=1;i<=n;i++){
        let temp=i
            while(temp%5==0){
                temp=temp/5
                 count++;
            }


    }
    return count;


};