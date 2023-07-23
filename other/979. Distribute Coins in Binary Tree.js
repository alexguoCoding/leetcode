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
 * @return {number}
 */
var distributeCoins = function (root) {
    let result = 0;
    let dfs = function (node) {
      if (node == null) {
        return [0, 0];
      }
      let [c1, p1] = dfs(node.left);
      let [c2, p2] = dfs(node.right);
      // console.log([c1,p1],[c2,p2])
  
  
      let m = node.val;
     // console.log(m, c1, c2);
      let sumcoin = m + c1 + c2;
  
      let sumpos = 1 + p1 + p2;
      result = result + Math.abs(sumcoin - sumpos);
      //console.log(sumcoin, sumpos);
      return [sumcoin, sumpos];
    };
    dfs(root);
    return result;
  };
  