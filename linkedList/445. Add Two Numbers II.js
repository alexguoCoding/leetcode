/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1=[];
    while(l1!=null){
        num1.push(l1.val);
        //console.log(l1.val);
        l1=l1.next;
    }
     //console.log(num1.charAt(1));
    let num2=[];
    while(l2!=null){
         num2.push(l2.val);
        //console.log(l2.val);
        l2=l2.next;
    }
   //console.log(num1);
    //console.log(num2);

    let num3=[];

    

   
    let i=0;
    let j=0;
    let carry=0;
    while(i<num1.length&&i<num2.length){    
        let sum=parseInt(num1[num1.length-i-1])+parseInt(num2[num2.length-i-1])+carry;
        carry=Math.floor(sum/10);
        num3.unshift(sum%10);
        i++;
        // console.log(sum%10);
    }
     //console.log(num3);
    while(i<num2.length){
        let sum=parseInt(num2[num2.length-i-1])+carry;
        carry=Math.floor(sum/10);
        num3.unshift(sum%10);
        // num3[num1.length-i-1]=sum%10;
        i++;
    }
    while(i<num1.length){
        let sum=parseInt(num1[num1.length-i-1])+carry;
        carry=Math.floor(sum/10);
         num3.unshift(sum%10);
        i++;
    }
    if(carry==1){
        num3.unshift(1);

    }
    console.log(num3);
    let pre=new ListNode(-1);
    let out=pre;

   while(num3.length!=0){
        pre.next=new ListNode(num3.shift());
        pre= pre.next;
     

    }
   
    return out.next;


   
    
};