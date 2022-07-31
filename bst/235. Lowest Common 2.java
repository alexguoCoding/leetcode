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
    public void helper(TreeNode root, TreeNode p, TreeNode q) {
         if(p.val<root.val&&q.val<root.val){
              helper( root.left,  p,  q);
            }
         else if(p.val>root.val&&q.val>root.val){
              helper( root.right,  p,  q);
            }
         else {
             out=root;
             
            }

return;



        
  
        
    }
    
}