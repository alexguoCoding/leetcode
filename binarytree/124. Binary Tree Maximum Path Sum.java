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
    int result=-1000;
    public int maxPathSum(TreeNode root) {
        helper(root);
        return result;
    
        
    }
    public int helper(TreeNode root){
        if(root==null){
            return 0;
        }
        int sum=0,l=0,r=0;
        if(root.left!=null){
            l=helper(root.left);
            // l=Math.max(root.val,root.val+l)
            if(l>0){
                sum+=l;
            } 
             
        }
        if(root.right!=null){
             r=helper(root.right);
            if(r>0){
                sum+=r;
            }

        }
        result= Math.max(result,sum+root.val);
        if(l>r){
            return Math.max(root.val,root.val+l);
        }
        else{
            return Math.max(root.val,root.val+r);
        }
       
        
    }
}