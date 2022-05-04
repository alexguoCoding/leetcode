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
       
        while(a.next!=null){
            length++;
            a=a.next;
        }
        int deletePosition=length-n;
         //System.out.println("length:"+a.val);
       //System.out.println("length:"+length);
        
        a = result;
        for(int i=0;i<deletePosition;i++){
            a=a.next;
        }
       // System.out.println("a.val:"+b.val);
         

        a.next=a.next.next;
        
        return result.next;
    }
}