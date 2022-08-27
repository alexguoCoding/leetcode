/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int result=0;
    
    public int diameterOfBinaryTree(TreeNode root) {
        helper(root);
        return result;
        
        
    }
    public int helper(TreeNode root) { 
        if(root==null){
             return 0;
        }
        int l=0,r=0;
        if(root.left!=null){
             l=helper(root.left)+1;
            
        }
        if(root.right!=null){
              r=helper(root.right)+1;
            
        }
        result=Math.max(l+r,result);

        int sum=Math.max(l,r);

        return sum;
        
        
    }
}