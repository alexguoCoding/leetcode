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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result=[]
    let tempresult=[];
    let tempsum=0;
    

    let helper=function(node){
        if(node==null){
            return;
        }
        tempsum+=node.val;
         console.log(tempresult)
        tempresult.push(node.val)
        if(node.left==null&&node.right==null){
            if(tempsum==targetSum){
                result.push([...tempresult])
                return;
            }
            else{
                return;
            }
        }
        
        //console.log(tempsum)
        if(node.left){
           // console.log(tempsum)
             helper(node.left)
             tempsum-=node.left.val
             tempresult.pop()

        }
        if(node.right){
             helper(node.right)
             tempsum-=node.right.val
              tempresult.pop()

        }
      



    }
    helper(root)
    return result;
    
};