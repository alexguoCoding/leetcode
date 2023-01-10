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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var rangeSumBST = function(root, low, high) {
     let sum=0;
     if(!root){
         return;
     }


    const tranverse=function(root){
        if(!root){
            return 0;

        }
        if(root.val>=low&&root.val<=high){
            sum+=root.val;
           tranverse(root.left)
           tranverse(root.right)

        }
        else if(root.val>high){
            tranverse(root.left)

        }
        else if(root.val<low){
            tranverse(root.right)

        }


    }
    tranverse(root);

    
    

    return sum;

    
};