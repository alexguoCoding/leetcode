/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode pre = new ListNode(0);
        pre.next = head;
        ListNode current = head.next;
        ListNode beforecurrent = head;
        while (current != null) {
            ListNode prehead = pre;
            head = pre.next;

            // System.out.println(prehead.val);
            while (current != head && current != null) {
                // System.out.print("current.va l"+current.val);
                // System.out.print("head.val "+head.val);
                if (current.val < head.val) {
                    ListNode aftercurrent = current.next;
                    prehead.next = current;
                    current.next = head;// insert
                    // System.out.print(prehead.val);
                    // System.out.print(current.val);
                    // System.out.println(head.val);

                    // System.out.print(beforecurrent.next.val);
                    beforecurrent.next = aftercurrent;// remove

                    current = beforecurrent.next;
                    // System.out.print(beforecurrent.val);
                    // System.out.println(" not.");

                    break;
                } else {
                    prehead = prehead.next;
                    head = head.next;
                    // System.out.print(" prehead=prehead."+prehead.val);
                    // System.out.print(" head."+head.val);
                }
                if (current == head) {
                    beforecurrent = current;
                    current = current.next;
                    // System.out.println(" current."+current.val);
                    break;
                }

            }

        }
        return pre.next;

    }
}