/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let midNode=new ListNode();
    let fast=head;
    let slow=head;


    while(fast.next!=null&&fast.next.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    midNode=slow;
    let nexthalf=midNode.next;

    midNode.next=null;

    let firstnext,secondnext;
     let nextfirst=reverse(nexthalf);
    // while(nextfirst!=null){
    //      console.log(nextfirst.val)
    //      nextfirst=nextfirst.next;
        
    // }
    while(nextfirst!=null){
        firstnext=head.next;
        secondnext=nextfirst.next;
        head.next=nextfirst;  
        nextfirst.next=firstnext;
        head=firstnext;
        nextfirst=secondnext;



    }
    return head;
    
};
var reverse = function(nexthalf) {
    if(nexthalf==null){
        return null;

    }
    let pre=nexthalf;
    let cur=nexthalf.next;
    let next;
    pre.next=null;
    while(cur!=null){
        next=cur.next;
        cur.next=pre;
        pre=cur;
        cur=next;
    }
    // while(pre!=null){
    //     console.log(pre.val)
    //     pre=pre.next;
         
    // }
    return pre;
    
    
};