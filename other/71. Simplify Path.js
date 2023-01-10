/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let p=path.split("/")
    console.log(p)
    let result=[];
    let stack=[];
    for(let e of p){
        if( e == '..'){
            stack.pop()
           
        }
        else if(e == ''){

        }
        else if(e == '.'){

        }
        else {
            
            stack.push(e)
        }
       
    }
    
    return "/"+stack.join("/");
    
};