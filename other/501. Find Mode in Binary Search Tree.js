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
 * @return {number[]}
 */
var findMode = function (root) {
  let result = [];
  let count = 0;
  let maxcount = 0;

  let pre = Number.NEGATIVE_INFINITY;
 // console.log(pre);
  let dfs = function (root) {
    if (root == null) {
      return;
    }
    dfs(root.left);
    if (pre == Number.NEGATIVE_INFINITY) {
      pre = root.val;
      count++;
    } else if (pre == root.val) {
      count++;
    } else if (pre != root.val) {
      if (count > maxcount) {
        result = [];
        result.push(pre);
        maxcount = count;
       
      }
      else if (count == maxcount) {
        result.push(pre);
    

      }
      pre = root.val;
      count=1
    }
    //console.log(count)

    dfs(root.right);
  };
  dfs(root);
  //console.log(pre)
   // console.log(maxcount)
    console.log(count)
  if (count > maxcount) {
    result = [];
    result.push(pre);

  }
  else if (count == maxcount) {

    result.push(pre);

  }
  return result;
};