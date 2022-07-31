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
class BSTIterator {

    List<Integer> arr= new ArrayList<>();
    int id=0;
    public BSTIterator(TreeNode root) {
        inorderTraversal( root);
    }
    
    public int next() {

        return  arr.get(id++);
    }
    
    public boolean hasNext() {
        if(id<arr.size()){
            return true;
        }
        else{
            return false;
        }
        
    }
    private void inorderTraversal(TreeNode root) {
        if(root==null){
            return;
        }
        inorderTraversal(root.left);
        arr.add(root.val);
        inorderTraversal(root.right);
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */