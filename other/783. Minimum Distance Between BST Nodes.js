/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let array=[]
    let val=-1
    let bas=Number.POSITIVE_INFINITY
    let dfs=function(root){
        if(root==null){
            return
        }
        dfs(root.left)
        if(val==-1){
            val=root.val

        }
        else{
           bas=Math.min(root.val-val,bas)
          
          // console.log(bas)
            val=root.val

        }
        
        
        array.push(root.val)
        dfs(root.right)


    }

    dfs(root)

    //console.log(array)
  
    return bas

};