/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {

    public Node connect(Node root) {
        List<Node> vals = new ArrayList<>();
        if(root!= null ){
        vals.add(root);
        }
         

        while(vals.size()>0){
            int len=vals.size();
            for(int i=0;i<len-1;i++){
                vals.get(i).next=vals.get(i+1);
            // Node c =  vals.get(i);
            }
            for(int i=0;i<len;i++){
                Node remove =  vals.remove(0);
                if(remove.left!=null){
                    vals.add(remove.left);
                }
                if(remove.right!=null){
                    vals.add(remove.right);
                }
                
                // vals.add(remove.left);
                 // vals.add(remove.right);
            }
            
        }


        
        return root;
    }
}