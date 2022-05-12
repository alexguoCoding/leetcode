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
    public ListNode swapPairs(ListNode head) {
        
           ListNode pre = new ListNode(0,head);
            ListNode result = pre;
        ListNode start = pre;

        
      while(result.next!=null&&result.next.next!=null){
             ListNode firstnode = result.next;
       // System.out.println("firstnode.val:"+firstnode.val);
             ListNode secondnode = result.next.next;
         ListNode thirdnode = result.next.next.next;
        // System.out.println("secondnode.val:"+secondnode.val);
           pre.next=secondnode;
            //System.out.println(" pre.next.val:"+ pre.next.val);
           secondnode.next=firstnode;
        // System.out.println("secondnode.next.val:"+secondnode.next.val);
           firstnode.next=thirdnode;
       // System.out.println("firstnode.next.val:"+firstnode.next.val);
           System.out.println("pre.val:"+pre.val);
          System.out.println("pre.next.val:"+pre.next.val);
          System.out.println("pre.next.next.val:"+pre.next.next.val);
         // System.out.println("pre.next.next.next.val:"+pre.next.next.next.val);
        result=firstnode;
         pre=firstnode;
        System.out.println("pre.val:"+pre.val);
          
          System.out.println("nextitratie:");

            
      }
        
        

     
     return start.next;
    }
}