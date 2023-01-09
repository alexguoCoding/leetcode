/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let pre=new ListNode(-1,head);
    let last=pre;
    let tempcur=head;
    let firstmax=head;
    let len=0;
    let tempre=pre;
    let conpare=false;

    while(tempre.next!=null){
        len++;
        tempre=tempre.next;
    }
    last=tempre;

     tempcur=head;
     tempre=pre;
     let i=0;
     while(i<len){
         console.log(tempcur.val)
         if(tempcur.val>=x&&tempcur.next!=null){         
             tempre.next= tempcur.next;    
             last.next=tempcur;
             last=last.next;            
            tempcur=tempre.next;//
         }
         else{
            tempcur=tempcur.next;
            tempre=tempre.next;      
         }      
         i++;
     }
     last.next=null;
   

   

    return pre.next;
    
};