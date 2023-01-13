/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {



    let helper=function(left,right){
        let mid=Math.floor((left+right)/2)
        let root=new TreeNode(nums[mid])
        //console.log(nums[mid])
        // if(right-left==0){
        //     return root
        // }
        if(left>right){
            return null
        }
        root.left=helper(left,mid-1);
        root.right=helper(mid+1,right);
        return root;

    }
     let result=helper(0,nums.length-1);
    return result;

    
    
    
};