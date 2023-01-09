/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let result=[];
    num1=num1.split("");
    num2=num2.split("");
    let c=0;
    while(num1.length!=0&&num2.length!=0){
        let x=num1.pop()-'0';
        let y=num2.pop()-'0';
        let num=x+y+c;
       
        result.unshift(num%10);
        console.log(result);
        c=Math.floor(Math.floor(num/10))

    }
     console.log(result);
    while(num1.length!=0){
        let x=num1.pop()-'0';
        let num=x+c;
        result.unshift(num%10);
        c=Math.floor(Math.floor(num/10))

    }
    while(num2.length!=0){
        let x=num2.pop()-'0';
        let num=x+c;
        result.unshift(num%10);
        c=Math.floor(Math.floor(num/10))

    }
    if(c=='1'){
         result.unshift(1);

    }
    return result.join("");
      

};