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
var getMinimumDifference = function(root) {
    let arr=[];
    var inorder= function(root){
        if(root==null){
            return;
        }
        inorder(root.left)

        arr.push(root.val)
       
        inorder(root.right)
       


    }
    inorder(root)
    let diff=arr[1]-arr[0];
    for(let i=0;i<arr.length-1;i++){
        let tempdiff=arr[i+1]-arr[i]
        if(tempdiff<diff){
            diff=tempdiff;

        }


    }
    return diff;

    
    

};