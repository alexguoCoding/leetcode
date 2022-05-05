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
    public ListNode removeElements(ListNode head, int val) {
        ListNode result = new ListNode(-1,head);
          ListNode cur = head;
        ListNode pre = result;

        
        while(cur!=null){
           // System.out.println("result:"+result.next.val);
            if(cur.val==val){
                pre.next=cur.next;


            } 
            else{
                pre=cur;
            }
            cur=cur.next;



                




        
            
        }
        return result.next;

    }
}