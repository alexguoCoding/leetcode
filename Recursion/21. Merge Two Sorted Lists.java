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
    ListNode out=null;
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        return helper( out,  list1,  list2);

        }
      public ListNode helper(ListNode out, ListNode list1, ListNode list2) {
      if(list1 == null){
            return list2;
        }
        if(list2==null){
            return list1;

        }

        if(list1.val>=list2.val){
            out=list2;

            out.next=helper( out.next,list1,  list2.next);

           
         }

       else{
            out=list1;
           out.next=helper(  out.next,list1.next,  list2);

         }
    return out;
          
      }
}