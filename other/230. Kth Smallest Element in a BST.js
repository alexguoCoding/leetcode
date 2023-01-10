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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root){
        return;
    }
    // console.log(k)
    let time=k;
    let result=-1;
    const helper= function(root){
        if(!root){
          return;
        }
        helper(root.left)
        time=time-1;
        //console.log(time)
       // console.log(root.val)
        if(time==0){
            result=root.val;

        }
        helper(root.right)
       



    }
   
    helper(root);
    return result
   


    
};