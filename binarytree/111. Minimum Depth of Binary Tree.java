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
    int min=100000;
    public int minDepth(TreeNode root) {
        helper(root,0);
        if(root==null){
            return 0;
        }
        return min;  
    }
    public void helper(TreeNode root,int temp) {
        if(root==null){

            return;
        }
        if(root.left==null&&root.right==null){
            min=Math.min(temp+1,min);
            return;
        }
        helper( root.left, temp+1);
        helper( root.right,temp+1);
        

        return;  
    }
    
}