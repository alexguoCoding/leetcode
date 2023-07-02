/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let result=new Array(high+1).fill(0)
    result[zero]+=1
    result[one]+=1
    let mod=10**9+7



    for(let i=0;i<=high;i++){
        if(i>=zero){
            result[i]=result[i]+result[i-zero]


        }
        if(i>=one){
            result[i]=result[i]+result[i-one]

        }
        result[i]=result[i]%mod
         console.log( result[i])




     
    }
    let sum=0;
    for(let i=low;i<=high;i++){
        sum+=result[i]

    }
  

    return sum%mod;

    
   

    
};