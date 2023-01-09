/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

let result=[];
let carry=0;





    for(let i=a.length-1,j=b.length-1;i>=0||j>=0; i--,j--){
         //console.log(1);
        let num1=+a[i]||0;
        let num2=+b[j]||0;
        let cur=num1^num2^carry;
       
 process.stdout.write("num1 "+num1+"num2 "+num2+"carry "+carry+"cur"+cur);

        if(num1&&num2||num1&&carry||num2&&carry){
            carry=1;
        }
        else{
            carry=0;
        }
         
        result.unshift(cur);
   

        
        console.log(carry);

       
        




    }
    if(carry==1){
        result.unshift(1);
    }
 
   return result.join("");

};