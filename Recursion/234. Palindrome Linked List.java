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
    
    private ListNode result;
   public boolean isPalindrome(ListNode head) {
       
        result=head;
       return recursivelyCheck(head);
       
   }
   
    private boolean recursivelyCheck(ListNode head){

       if(head!=null){
           if(!recursivelyCheck(head.next)){
               return false;
           }
           // System.out.println("head.val:"+head.val);
           // System.out.println("result.val:"+result.val);
           if(result.val!=head.val){
               return false;
           }

           result=result.next;
       }
       return true;
       
   }
}