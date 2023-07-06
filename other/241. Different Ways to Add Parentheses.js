/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  let dfs = function (l, r) {
    let result = [];

    for (let i = l; i <= r; i++) {
       // console.log(expression[i])
      if (expression[i] == "+" || expression[i] == "-" || expression[i] == "*") {
        let leftAns = [];
        let rightAns = [];
        leftAns = dfs(l, i - 1);
        rightAns = dfs(i + 1, r);
        for (let num1 of leftAns) {
          for (let num2 of rightAns) {
              if(expression[i]=='+'){
                  result.push(num1+num2)

              }
              else if(expression[i]=='-'){
                
                   result.push(num1-num2)
                  
              }
              else if(expression[i]=='*'){
                  result.push(num1*num2)
                  
              }
          }
        }
      }
    }
    if(result.length==0){
        let num=0;
        for(let i=l;i<=r;i++){
         // console.log(expression[i])
     
            let n=expression[i].charCodeAt() - '0'.charCodeAt();
            num=num*10+n
            // console.log(num)
            
        }
         result.push(num)
       
    }
    // console.log(result)
    return result
    console.log(expression[i])
  }
  // console.log('a')
  return dfs(0, expression.length - 1);
};