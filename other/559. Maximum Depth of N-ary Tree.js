/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max=0;
    if(root==null){
        return 0
    }



    let dfs=function(temproot,tempmax){
      // console.log(tempmax)
        if(temproot.children.length==0){
             //console.log(max)
            max=Math.max(tempmax,max)
            return 

        }
        let tempchildren=temproot.children
        for(let c of tempchildren){
            dfs(c,tempmax+1)
        }


    }
    dfs(root,1)

    

    return max;

};