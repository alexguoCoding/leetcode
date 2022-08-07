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
    
     int out=0;
    public int countNodes(TreeNode root) {
        if(root!=null){
            ++out; 
        }
        helper( root);
        return out;
        
        
        
    }
    public void helper(TreeNode root) {
        
        if(root==null){
            return ;
        }
        if(root.left!=null){
            out=out+1;
            helper( root.left);

        }
        if(root.right!=null){
            out=out+1;
            helper(root.right);

        }
        
        
    }
}