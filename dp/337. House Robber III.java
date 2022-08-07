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
     //[0:without,0: with]
    public int rob(TreeNode root) {
        int[]result = new int [2];
        result=dfs(root);
        // System.out.println(result[0] +" " +result[1]);
        return Math.max(result[0],result[1]);
        
    }
    public int[] dfs(TreeNode root){
        if(root==null){
            int[]result = new int [2];
            result[0]=0;
            result[1]=0;
            
            return result;
        }
        
        int[]left = new int[2];
        int[]right = new int[2];
        left= dfs(root.left);
        right= dfs(root.right);
        // System.out.println("left:"+left[0] +" " +left[1]);
        // System.out.println("right:"+right[0] +" " +right[1]);
        int withroot=root.val+right[1]+left[1];
        int withoutroot=Math.max(left[0],left[1])+Math.max(right[0],right[1]);
        int[] out=new int[2];
        out[0]=withroot;
        out[1]=withoutroot;
        // System.out.println(out[0] +" " +out[1]);
        
        return out;
        
    }
}