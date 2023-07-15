/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    let sum=0
    for(let i=n;i>0;i--){
        let tempsum=1
        let posible=9
         for(let j=0;j<i;j++){
             if(j==0){
                  tempsum=tempsum*(posible)
             }
             else{
                 tempsum=tempsum*(posible)
                 posible=posible-1
             }

         }
         sum+=tempsum
      


    }
    return sum+1
    
};