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
    public TreeNode deleteNode(TreeNode root, int key) {
         return helper( root,  key);
    

    }
    public TreeNode helper(TreeNode root, int key){
        if(root==null){
            return null;
        }

        if(key>root.val){
              if(root.right!=null){
                    if(key==root.right.val){
                        root.right=deleteNode( root.right,  key);
                    }
                    else{
                        deleteNode( root.right,  key);
                        }
              }
        }
        else if (key<root.val){
            if(root.left!=null){
                 if(key==root.left.val){
                    root.left=deleteNode(root.left,  key);
                } 
                else{
                    deleteNode( root.left,  key);
                }
            }

        }
        else if (key==root.val){
             if(root.left==null&&root.right==null){
                return null;
                 }
            else if(root.left!=null&&root.right==null){
                
                return root.left;
            }
            else if(root.left==null&&root.right!=null){
                
                return root.right;
            }
            else if(root.left!=null&&root.right!=null){
                TreeNode temp=root.right;
                while (temp.left!=null){
                    temp=temp.left;
                }
                temp.left=root.left;
                return root.right;
            }            
            
        }
        return root;
        
    }
}