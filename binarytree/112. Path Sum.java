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
    boolean a=false;
    public boolean hasPathSum(TreeNode root, int targetSum) {
        helper(root,targetSum,0);
        return a;
        
    }
    public boolean helper(TreeNode root1, int Sum,int cur) {
        if(root1==null){
            return true;
        }
        cur+=root1.val;
        if(cur==Sum&&root1.left==null&&root1.right==null){
                a=true;
            return true;
        }
        helper( root1.left,  Sum, cur);
        helper( root1.right,  Sum, cur);
         return true;
        
    }
}