/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
      int length=0;
    ListNode result = new ListNode(0,head);
    ListNode a = result;
    ListNode b = result;
    //int deletePosition=length-n;
    for(int i=0;i<n;i++){
            a=a.next;
        }

        while(a.next!=null){

            a=a.next;
            b=b.next;
        }
System.out.println("a:"+a.val);
//         System.out.println("b:"+b.val);
//         System.out.println("b.next:"+b.next.val);
//          System.out.println("b.next.next:"+b.next.next.val);
         

        b.next=b.next.next;
        // System.out.println("after:");
        // System.out.println("b:"+b.val);
        // System.out.println("b.next:"+b.next.val);
        //  System.out.println("b.next.next:"+b.next.next.val);
        // System.out.println("result:"+result.val);
        //  System.out.println("result:"+result.next.val);
        
        return result.next;
    }
}