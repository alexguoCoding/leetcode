/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i=1
    while(n>=i){
        n=n-i
        i++
      //  console.log(n+' '+i)

    }
    return i-1
};