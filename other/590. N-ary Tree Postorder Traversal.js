/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result=[]

    if(root==null){
        return result 

    }
    let dfs=function(root) {
         

        let templ=root.children.length
       
   
            for(let i=0;i<templ;i++){
                dfs(root.children[i])
                
            }
            if(root!=null){
                result.push(root.val)

            }
          

        

        

    }
    dfs(root)
    return result
    
};