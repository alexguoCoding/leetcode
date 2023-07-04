/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result=[]

    if(root==null){
        return result 

    }
    let dfs=function(root) {
         result.push(root.val)

        let templ=root.children.length
       
   
            for(let i=0;i<templ;i++){
                dfs(root.children[i])
            }

        

    }
    dfs(root)
    return result
};