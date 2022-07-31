/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    TreeNode out=null;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        helper( root,  p,  q);
        return out;
        
    }
    public boolean helper(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null){
            return false;
        }
        if(root.val==p.val){
             out=root;
            return true;
        }
        else if(root.val==q.val){
             out=root;
            return true ;
        }
        boolean left=helper( root.left,  p,  q);
        boolean right=helper( root.right,  p,  q);
        
        if(left&& right){
            out=root;
            return true;
        }
        else if(left|| right){
           return true;
        }
        else{
            return false;
        }
        // return false;


        
  
        
    }
    
}