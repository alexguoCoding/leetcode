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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
    let result = [];
    let i = 0;
    let wrong = false;
    let dfs = function (node) {
      if (node == null) {
        return;
      }
      if (node.val == voyage[i]) {
        i++;
      } else {
        wrong = true;
      }
  
      if (node.left != null) {
        if (node.left.val == voyage[i]) {
  
        } 
        else if (node.right!=null&&i<voyage.length&&node.right.val == voyage[i]) {
         // console.log("a")
          let leftNode = node.left;
          let rightNode = node.right;
          node.left = rightNode;
          node.right = leftNode;
          result.push(node.val)
        } else {
          wrong = true;
          return;
        }
  
        dfs(node.left);
      }
      if (node.right != null) {
  
        dfs(node.right);
      }
    };
    dfs(root);
    if (wrong) {
      let wrontarr = [];
      wrontarr.push(-1);
      return wrontarr;
    }
    return result;
  };
  