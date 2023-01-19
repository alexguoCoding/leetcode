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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let visit=[];
    if(root==null){
        return visit;
    }
    visit.push(root)
    let result=[]
    while(visit.length!=0){
        let length=visit.length;
        let  artarray=[];
        while(length!=0){
            length--;
            let newnode=visit.shift();
            artarray.push(newnode.val)
            if(newnode.left!=null){
                visit.push(newnode.left)
            }
            if(newnode.right!=null){
                visit.push(newnode.right)
            }
        }
         result.unshift(artarray)
    }
    return result;

    
};