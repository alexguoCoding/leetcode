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
    publi cListNode left;
    public void reorderList(ListNode head) {
        
        if(head==null||head.next==null||head.next.next||null){
            return head
        }
        
        
        ListNode firstnode = head;
        ListNode thirdnode; = head.next.next;
        ListNode secondnode = reorderList(head.next);

        
        
        firstnode.next=secondnode;
        secondnode.next=thirdnode;
        
        return secondnode;
        
    }    
    
    
    
    
    
    
    public void reorderList(ListNode head) {
        ListNode left = head;
        reorder(head);
        
        return;
        
    }
    
    
    
}