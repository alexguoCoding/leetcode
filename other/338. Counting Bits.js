/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let tempresult=[]
    for (let i=0;i<=n;i++){
    tempresult.push(i)
    }
    let result=[]
    console.log(tempresult)
    for(let n of tempresult){
        // console.log(n)
        let count=0;
        while(n!=0){
            count+=n&1
            n=n>>>1
            // console.log(n)

        }
        result.push(count)



    }
    return result

    
};