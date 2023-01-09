/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let pre=new  ListNode(-1, head);
    if(head===null){
        return head;

    }
    let length=0;
    let temp=pre;
    while(temp.next!=null){
        temp=temp.next
        length++;
    }
    k=k%length;

    while(k!=0){
        rotate(pre);

        k--;
    }
    return pre.next;

    
};
var rotate = function(pre) {
    
     let temppre=pre;
    let cur=temppre.next;
     while(temppre.next!=null){
         temppre=temppre.next;
     }
     pre.next=temppre;
 
     temppre.next=cur;

     

     while(cur.next!=temppre){
         cur=cur.next;
      
     }
     cur.next=null;
     temppre=pre;
     while(temppre.next!=null){
       
         temppre=temppre.next;
     }

    
};