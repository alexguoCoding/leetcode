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
var pruneTree = function(root) {


    let dfs=function(node){
        if(node==null){
            return true
        }
        let l=false
        if(dfs(node.left)==true){
            node.left=null
            l=true
        }
        let r=false
        if(dfs(node.right)==true){
            node.right=null
             r=true
        }
        let m=false
        if(node.val==0){
           
             m=true
        }

        
        return m&&l&&r

    }
    dfs(root)
    if(root.val==0&&root.left==null&&root.right==null){
        root=null
        
    }
    
    return root

    
};