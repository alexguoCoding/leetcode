/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
    let result=0
    for(let i=1;i<num;i++){
        // console.log(num%i,num/i)
        if(Math.floor(num/i)==num/i){
            
            result+=i

        }

    }
    if(result==num){
        return true

    }
    return false
    
};