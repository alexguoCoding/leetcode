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
    int max=0;
    public int maxDepth(TreeNode root) {

            
            
         helper(root,0);
        return max;

        
    }

    public int helper(TreeNode root,int num) {
        if(root==null){
             max=Math.max(max,num);
            return max;
        }
        helper(root.left,num+1);
        helper(root.right,num+1);
        return max;


       
        
        
    }
}