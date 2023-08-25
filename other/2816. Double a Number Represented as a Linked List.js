/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 **/
var doubleIt = function (head) {
    let preNode = null;
  
    let tempPre1 = preNode;
    let temphead = head;
    while (temphead != null) {
      let tempnext = temphead.next;
      temphead.next = tempPre1;
  
      tempPre1 = temphead;
      temphead = tempnext;
      // console.log(temphead.val)
    }
    let pre=tempPre1;
    let add = 0;
    while (tempPre1!= null) {
      let temp = tempPre1.val * 2 + add;
      add = 0;
      if (temp >= 10) {
        add = 1;
      }
      tempPre1.val = temp % 10;
      tempPre1 = tempPre1.next;
    }
     tempPre1=pre
     while(tempPre1.next){
       tempPre1=tempPre1.next
     }
    if (add == 1) {
      let node = new ListNode(1, null);
      tempPre1.next=node;
       tempPre1=node;
    }
     let cur=pre
     let temppre=null
  
  while(cur!=null){
    let tempnext=cur.next
    cur.next=temppre
    temppre=cur
    cur=tempnext
  
  }
  
    return temppre;
  };
  