/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

 var flatten = function(head) {
    let test=head;
  

//  console.log(test.next);

   return helper(head);

};
var helper= function(head) {
    let result=head;
    if(head==null){
        return null;

    }
  

    while(head.child!==null||head.next!==null){
        if(head.child!=null&&head.next!=null){
            let saveSec=head.next;
            head.next=head.child;
            //  console.log(head.next.val);
            head.child=null;
            head.next.prev=head;
           // console.log(test.next.val);
            let temphead=head.next;
            while(temphead.next!=null){
                temphead=temphead.next;
            }
        temphead.next=saveSec;
        saveSec.prev=temphead;
        // console.log(head.next.next.prev.val);
        }
        else if(head.child==null&&head.next!=null){
           

        }
        else if(head.child!=null&&head.next==null){
            head.next=head.child;
            head.next.prev=head;
            head.child=null;
            
        }
       
        head=head.next;

    }

    return result;



}