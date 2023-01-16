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
var sumNumbers = function(root) {
    let sum=0;
    let tempsum=[];

    let helper=function(node){
        if(node==null){
            return;
        }
         tempsum.push(node.val)
        if(node.left==null&&node.right==null){
            // tempsum.join('')
             sum+=parseInt(tempsum.join(''))
             //console.log(tempsum.join('').parseInt())
            //console.log(tempsum)

            //sum+=tempsum;
            return;
        }
       
       // console.log(tempsum)

        if(node.left){
            
            helper(node.left)
            tempsum.pop()
        }
        if(node.right){
            
            helper(node.right)
             tempsum.pop()
        }


    }
    helper(root)
    return sum;

    
};