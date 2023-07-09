/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
let zero=0
    while(left<right){
        left=left>>1
    
        right=right>>1
        zero++;
     //   console.log(zero)


    }
    while(zero>0){
            left=left<<1
          
        zero--

    }



        return left
        
    