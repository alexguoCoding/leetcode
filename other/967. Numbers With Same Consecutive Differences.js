/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let result=[];
    let temp=[];

    let helper=function(time,cur){
        if(time==n){

            result.push([...temp].join(""));
          // console.log(result)

            return;

        }
        for(let i=0;i<=9;i++){
            if(cur+k==i){
                temp.push(i)
             //   console.log(time)
                // console.log(i)

                helper(time+1,i)
                temp.pop();

            }
            else if(cur-k==i){
                temp.push(i)

                helper(time+1,i)
                temp.pop();

            }

            
        }
    }
    for(let i=1;i<=9;i++){
        temp.push(i)
         helper(1,i)
         temp.pop();

    }
   
    
    return result;
    
};