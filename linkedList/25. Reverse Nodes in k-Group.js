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
 var reverseKGroup = function(head, k) {
    let pre=new ListNode(-1, head);
    let temp=pre.next;
    let temparray=[];
    let temppre=pre;

    while(rest(temp,k)==true){
        while(temparray.length<k){
            temparray.push(temp);
          
            temp=temp.next;

        }
        console.log("a")
        while(temparray.length!=0){
            temppre.next=temparray.pop();
            
             
            temppre=temppre.next;

           

        }
          temppre.next=temp;

        //  console.log( temppre.val)


    }

    return pre.next;


    
};
var rest=function(temp,k){
    let rest=temp;
    let count=0;
    while(rest!=null){
        count++;
        rest=rest.next;
    }
    if(count>=k){
        return true;
    }
    else{
        false;
    }

}