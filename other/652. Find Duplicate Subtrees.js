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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let saveSet=new Map()
    let saveNode=[]
    let dfs=function(node){
        if(node==null){
            return ""
        }
        let sunstr="l"+dfs(node.left)
        sunstr="r"+dfs(node.right)+sunstr
         sunstr="m"+node.val+sunstr
        //  console.log(sunstr)
         if(saveSet.get(sunstr)==1){
            // console.log(sunstr)
             saveNode.push(node)
             saveSet.set(sunstr, 2)

         }
         else if(saveSet.get(sunstr)==null){
            
             saveSet.set(sunstr, 1)

         }
         return sunstr


    }
    dfs(root)
    return saveNode
};