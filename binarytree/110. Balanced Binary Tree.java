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

    boolean out=true;
   
    public boolean isBalanced(TreeNode root) {
        helper( root, 0);

        if(!out) return false;



        return true;
    }
    public int helper(TreeNode root,int hight) {
        hight=hight+1;

        if(root==null){
           return hight;
        }
        int leftnumber=helper(root.left,hight);
        int rightnumber=helper(root.right,hight);
        if(Math.abs(leftnumber-rightnumber)>1){
               out=false; 
        }
        // System.out.println(leftnumber);
        // System.out.println(rightnumber);
  
        return Math.max(leftnumber,rightnumber);
        
    }
}