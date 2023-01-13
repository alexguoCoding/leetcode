/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result=new Array(temperatures.length).fill(0);
    let decreasingStack=[];
    for(let i=0;i<temperatures.length;i++){
          //console.log(+temperatures[i]+" "+temperatures[decreasingStack[decreasingStack.length-1]])
        //   console.log(temperatures[i])
    
        if(decreasingStack.length>0&&temperatures[i]>temperatures[decreasingStack[decreasingStack.length-1]]){
            while(decreasingStack.length>0&&temperatures[i]>temperatures[decreasingStack[decreasingStack.length-1]]){
            result[decreasingStack[decreasingStack.length-1]]=i-decreasingStack[decreasingStack.length-1]
           // console.log(result)

            decreasingStack.pop();
             
        }

        }

            decreasingStack.push(i);
           // console.log(decreasingStack.length)

        

    }
    return result;
    
    
};