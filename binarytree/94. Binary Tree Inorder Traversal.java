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
    LinkedList<Integer> output = new LinkedList<>();
   public List<Integer> inorderTraversal(TreeNode root) {
       if(root==null){
           return output;
       }
       if(root.left!=null){
           inorderTraversal( root.left);
       }
       output.add(root.val);
        if(root.right!=null){
           inorderTraversal( root.right);
       }
       return output;
       
       
       
       
   }
}