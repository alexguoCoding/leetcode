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
    List<TreeNode> list= new ArrayList<>();
     List<List<Integer>> nums= new ArrayList<List<Integer>>();
 

 public int findBottomLeftValue(TreeNode root) {
     list.add(root);
     List<Integer> level= new ArrayList<>();
     level.add(root.val);
     nums.add(level);
     while(list.size()!=0){
         int levelsize=list.size();
          List<Integer> levelnum= new ArrayList<>();
         for(int i=0;i<levelsize;i++){
            root = list.remove(0);
             if(root.left!=null){
                 levelnum.add(root.left.val);

                 list.add(root.left);
             }
             if(root.right!=null){
                 levelnum.add(root.right.val);
                 list.add(root.right);
             }
             
             
             
             
         }
         if(levelnum.size()!=0){
                 nums.add(levelnum);
         }



     }

     return nums.get(nums.size()-1).get(0);


 }
}