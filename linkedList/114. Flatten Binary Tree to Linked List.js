/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {

    helper(root);
    while(root!=null){
         //console.log(root.val)
        root=root.right;

    }
//   console.log("s");

};
var helper = function(root) {
    if(root==null){
        return;
        
    }
    if(root.right!=null&&root.left!=null){
        let temp=root.right;
        root.right=root.left;
        root.left=null;
        let endright=root.right;
        // console.log(root.right.val)
        // console.log(root.right.right.val)
        while(endright.right!=null){
            endright=endright.right;
        }

        endright.right=temp;

        // console.log(root.right.right.right.val);
    }
    // let new1=root
    // while(new1!=null){
    //     // console.log(new1.val)
    //     new1=new1.right;

    // }
    else if(root.left!=null&&root.right==null){

        root.right=root.left;
        root.left=null;
    }
  //  if(root.right!=null){
        //console.log(root.right.val)
        helper(root.right);
       // helper(root.left);

  //  }

    
    return;




};