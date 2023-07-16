/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let stack=[]
    preorder=preorder.split(",")
    if(preorder.length<2&&preorder[0]!='#'){
        return false

    }
 
    for(let i=0;i<preorder.length;i++){
        if(preorder[i]!='#'){
            stack.push(preorder[i])
         
        }
        else{

         
                stack.push('#')
       

            while(stack.length>=3&&stack[stack.length-1]=='#'&&stack[stack.length-2]=='#'&&stack[stack.length-3]!='#'){
                //console.log('s')
                stack.pop()
                stack.pop()
                stack.pop()
                stack.push('#')
            }


        }
        

    }
    if(stack.length==1){
        return true
    }
    return false
};