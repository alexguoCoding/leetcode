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
    int count=0;
        public int countUnivalSubtrees(TreeNode root) {
                helper(root);
            
            return count;
            
        }
        public boolean helper(TreeNode root) {
            if(root==null){
    
                return true;
            }
            
            
            boolean left=helper( root.left);
            boolean right=helper( root.right);
            if(left==true&&right==true){
                if(root.left!=null &&root.right!=null){
                    if(root.left.val==root.right.val){
                        
    
                        if(root.val==root.left.val){
                            count++;
                            return true; 
                        }
                        else {
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                }
                else if(root.left==null &&root.right!=null){
    
                    if(root.right.val==root.val){
                        count++;
    
                        
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else if(root.left!=null &&root.right==null){
    
                    if(root.left.val==root.val){
                                     count++;  
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else {
                    count++;
                    return true;
                }
               
    
            }
            else{
                return false;
            }
    
    
                
            
            
        }
    
    }