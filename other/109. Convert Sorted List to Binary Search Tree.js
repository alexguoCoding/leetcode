/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let start = head;
  let end = start;
  if(head==null){
      return null
  }
  //   let result=TreeNode(getmid())
  while (end != null) {
    //console.log(end.val);
    end = end.next;
  }

  let result=new TreeNode(-1) ;
  // console.log(mid.val);
  dfs = function (startNode, endNode, result) {
    let mideNode = getmid(startNode, endNode);
    result = new TreeNode(mideNode.val);
    console.log(result.val)

    if (startNode != mideNode) {
      result.left=dfs(startNode, mideNode);
    }
    if (endNode != mideNode.next) {
      result.right=dfs(mideNode.next, endNode);
    }
    return result;


  };

  return dfs(start,end,result);
};

var getmid = function (startnode, endnode) {
  let fast = startnode;
  let slow = startnode;
  while (fast.next != endnode && fast.next.next != endnode) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.val);
  return slow;
};
