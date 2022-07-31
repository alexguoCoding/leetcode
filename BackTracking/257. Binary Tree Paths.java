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

     List<String> res= new ArrayList<>();

     List<String> path= new ArrayList<>();

    public List<String> binaryTreePaths(TreeNode root) {
        helper( root);

        return res;
        
    }
    
    public void helper(TreeNode root) {
        path.add(Integer.toString(root.val));
        
        
        while(root.left==null&&root.right==null){
            StringBuilder sb = new StringBuilder();
            for(int i=0;i< path.size()-1;i++){
	            sb.append(path.get(i)).append("->");    
            }
             sb.append(path.get(path.size()-1));    
             res.add(sb.toString());
            

            return;
        }
        
        if(root.left!=null){
            helper( root.left);
            path.remove(path.size()-1);
            
            
        }
        if(root.right!=null){
            helper( root.right);
            path.remove(path.size()-1);
          }
        
        
        
    }
}