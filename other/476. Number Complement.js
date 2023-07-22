/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bit=[]
    while(num!=0){
        //console.log(num|1)
        if(num&1==1){
            bit.push(0)
        }
        else{
            bit.push(1)
        }
        num=Math.floor(num/2)
    }
    // console.log(bit)
    // bit=bit.reverse()
   // console.log(bit)
    let result=0
    let power=1
    for(let i=0;i<bit.length;i++){
        result+=bit[i]*power
        power*=2
    }
    return result
};