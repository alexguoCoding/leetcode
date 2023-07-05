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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  //  console.log(root.val)

  if (val > root.val) {
    let newroot = new TreeNode(val);
    newroot.left = root;
    return newroot;
  }
  let dfs = function (root) {
    if (root.right) {
      if (val > root.right.val) {
        let save = root.right;
        root.right = new TreeNode(val);
        root.right.left = save;
      } else {
        dfs(root.right);
      }
    }
    else{
        root.right = new TreeNode(val);
    }
  };
  dfs(root);
  return root;
};