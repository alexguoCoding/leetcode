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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum=0;
   let dfs=function(root) {
       if(root==null){
           return
       }
       dfs(root.right)
       let temp= root.val
       root.val=sum+root.val
       sum+=temp
         dfs(root.left)


   }
   dfs(root)
   return root
    
};