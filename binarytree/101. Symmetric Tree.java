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
    boolean a=true;
    public boolean isSymmetric(TreeNode root) {
        helper(root,root);
        return a;
    }
    public boolean helper(TreeNode root1,TreeNode root2) {
        if((root1==null&&root2!=null)|(root1!=null&&root2==null)){

            a=false;
            return true;
        }
         else if(root1==null&&root2==null){
            return true;
         }

         else if(root1!=null&&root2!=null){
            if(root1.val!=root2.val){
                a=false;
                return true;

             }
        helper( root1.left, root2.right);
        helper( root1.right, root2.left);
        }
        return true;
    }
}