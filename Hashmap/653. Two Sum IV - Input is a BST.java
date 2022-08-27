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
    Set<Integer> set=new HashSet<>();
    boolean result=false;
    public boolean findTarget(TreeNode root, int k) {
        helper(root,k);
        return result;

        
        
        
        
    }
    void helper(TreeNode root, int k){
        if(root==null){
            return;
        }
        int temp=k-root.val;
        if(set.contains(temp)){
            result=true;

        }
        else{
            set.add(root.val);
            findTarget(root.left,k);
            findTarget(root.right,k);
        }
        return;
        
    }
}