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
    TreeNode out;

    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
        out=null;
        helper( root,p);
        return out;

        
    }
    public void helper(TreeNode root, TreeNode p) {
        if(root==null){
            return;
        }

             if(root.val==p.val){
                if(root.right!=null){
                    
                    helper( root.right,  p);
                    
                         
                }
                else{
                    return;


                }

            }
            else if(root.val>p.val){
                    out=root;

                    helper( root.left, p);
                         




            }
            else{



                      helper( root.right,  p);



            }

        
    }
}