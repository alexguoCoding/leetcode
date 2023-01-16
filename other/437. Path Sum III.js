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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let result=0;
    let tempsum=0;
    let helper=function(node){
        if(node==null){
            return;
        }
        tempsum+=node.val;
        //console.log(tempsum)
        if(tempsum==targetSum){
            result++;
        }
        if(node.left!=null){
            helper(node.left)
            tempsum-=node.left.val

        }
        if(node.right!=null){
            helper(node.right)
            tempsum-=node.right.val

        }
        return;



    }


     let tanverseall= function(node){
         tempsum=0;
         helper(node)

        if(node==null){
            return;
        }
        if(node.left!=null){
            tanverseall(node.left)
        }
          tempsum=0;
        if(node.right!=null){
            tanverseall(node.right)
        }

     }
     tanverseall(root)
    return result;
    
};