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
    public int longestUnivaluePath(TreeNode root) {
        helper(root);
        return result;
        
    }
    public int helper(TreeNode root ){

        if(root==null){
             return 0; 
        }
         int l=0;
        int r=0;
        int sum=0;
        if(root.left!=null){
            int temp=helper( root.left);
            if(root.left.val==root.val){
                l=temp+1;
            }
        }


        if(root.right!=null){
            int temp=helper( root.right);
            if(root.right.val==root.val){
                r=temp+1;
            }


        }
        // System.out.println(l);
        // System.out.println(r);

            result=Math.max(result,l+r);
        // sum=l+r;
        return Math.max(l,r);

        
 
    }
}