/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let inceStack=[]
    let result=[]
    let times=0;
    if(num.length==k){
        return "0"
    }
    
    for(let i=0;i<num.length;i++){
        while(inceStack.length>0&&inceStack[inceStack.length-1]>num[i]&&times<k){
            times++;

            inceStack.pop();

        }
        inceStack.push(num[i])
        
    }

    // if(inceStack.size()>num.length-k){
    //     inceStack=

    // }
    inceStack=inceStack.slice(0,num.length-k)
    console.log(inceStack)
    while(inceStack[0]==0){
        inceStack.shift()
    }
   
    if(inceStack.length==0){
        inceStack.push(0)

    }
    console.log(inceStack)

    return inceStack.join("")

    
    


    
};