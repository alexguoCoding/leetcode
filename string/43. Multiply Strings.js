/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    // num1=num1.split("");
    // num2=num2.split("");
    // let res = new Array(num1.length + num2.length).fill(0)
    // for(let i=num1.length-1;i>=0;i--){
    //     for(let j=num2.length-1;j>=0;j--){
    //         let sum=num1[i]*num2[j]+res[i+j];
    //         res[i+j]=sum%10;
    //         res[i+j]=Math.floor(sum/10);
    //     }
    // }
    // console.log(res);
    if(num1==="0"||num2==="0"){
        return "0";

    }
    num1=num1.split("").reverse();
    num2=num2.split("").reverse();
    let res = new Array(num1.length + num2.length).fill(0)
    for(let i=0;i<num1.length;i++){
        for(let j=0;j<num2.length;j++){
            let sum=num1[i]*num2[j]+res[i+j];
            res[i+j]=sum%10;
            res[i+j+1]=Math.floor(sum/10)+res[i+j+1];
        }
    }
    res.reverse();
    if(res[0]==0){
        res.shift();
    }
    //console.log(res);
    return res.join("");



    
};