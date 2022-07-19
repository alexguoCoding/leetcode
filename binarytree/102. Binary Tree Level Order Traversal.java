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

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> lists = new ArrayList<>();
        List<TreeNode> nodes = new ArrayList<>();
         List<Integer> list2 = new ArrayList<>();
        if(root!=null){
            list2.add(root.val);
            nodes.add(root);
        }
       


        if(list2.size()>0){
               lists.add(list2);
        }
            
        while(!nodes.isEmpty()){
             List<Integer> list = new ArrayList<>();
            int len=nodes.size();
            for(int i=0;i<len;i++){
                TreeNode remove = nodes.remove(0);
                if(remove.left!=null){
                    list.add(remove.left.val);
                    nodes.add(remove.left);
                }
                if(remove.right!=null){
                    list.add(remove.right.val);
                    nodes.add(remove.right);
                }
                
            }
            if(list.size()>0){
                lists.add(list);
            }
            
        }
        return lists;
        
    }
}