/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let reverseBits=new Array(32).fill(-1)

    for(let i=0;i<32;i++){
        if(n&1==1){
            reverseBits[i]=1

        }
        else{
            reverseBits[i]=0

        }
        n=n>>1
    }
    //console.log(reverseBits)
    let result=0;
    for(let i=0;i<32;i++){
       if(reverseBits[i]){
           result+=Math.pow(2,31-i)
          // console.log(result)

       }

    }
    return result
};