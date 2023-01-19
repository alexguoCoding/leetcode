/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let newa=0;
    let result=0;
    while(num>=10){
        while(num!=0){
          
            newa+=num%10
            // newa=newa*10
            num=Math.floor(num/10)
        }
        //console.log(newa)
        num=newa;
        newa=0
    }
    return num;


};