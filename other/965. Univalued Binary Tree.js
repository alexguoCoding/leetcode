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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(root==null){
        return true;
    }
    let result=true;
    let answer=root.val
    let dfs=function(root){
        if(root==null){
            return

        }
        if(answer!=root.val){
            result=false

        }
        dfs(root.left)
        dfs(root.right)
        

    }
    dfs(root)
    return result
    
};