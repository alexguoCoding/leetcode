/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    n=n;
    let result=[];
    let cur=[];
    const valid=function(array){
        let stack=[];
        for(let i=0;i<array.length;i++){
            if(array[i]=='('){
                stack.unshift(array[i]);

            }
            else{

                if(stack.shift()=='('){
                    continue;

                }
                else{
                    return false;
                }
               
            }
        }

            return true;



    }
 

    const generate=function(left,right,cur){
        if(left==0&&right==0){
            if(valid(cur)){
                //  console.log(cur)
                result.push(cur.join(""));
            }
            return;

        }
        //console.log(left);
     
            if(left>0){
                cur.push('(')
                
                generate(left-1,right,cur)
                cur.pop();
            }
            if(right>0){
                cur.push(')')
                
                generate(left,right-1,cur)
                cur.pop();
            }

        
        




    }
    generate(n,n,cur);
    return result;
    
};