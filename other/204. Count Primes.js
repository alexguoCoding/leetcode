/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let prime=new Array(n).fill(1);
    let count=0;
    for(let i=2;i<n;i++){
        if(prime[i]==1){
            count++;
          //  console.log(i)
            for(let j=i;j<n;j=j+i){
                prime[j]=0
            }

        }

    }
    return count;
};