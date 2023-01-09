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
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode pre = new ListNode(-1, head);

        ListNode temp = pre;
        ListNode leftfront = new ListNode(-2);
        leftfront.next = pre;
        for (int i = 0; i < left; i++) {
            temp = temp.next;
            leftfront = leftfront.next;
        }

        ListNode leftNode = temp;
        temp = pre;

        for (int i = 0; i < right; i++) {
            temp = temp.next;
        }
        ListNode rightNode = temp;
        ListNode rightNext = rightNode.next;
        // System.out.println(leftfront.val);
        // System.out.println(leftNode.val);
        // System.out.println(rightNode.val);
        // System.out.println(rightNext.val);
        reverse(leftfront, leftNode, rightNode, rightNext);

        return pre.next;

    }

    private void reverse(ListNode leftfront, ListNode leftNode, ListNode rightNode, ListNode rightNext) {
        ListNode curfront = leftNode;
        ListNode finalfront = leftNode;
        leftNode = leftNode.next;
        ListNode save = leftNode;

        while (save != rightNext) {
            System.out.println(save.val);
            leftNode = save;
            save = leftNode.next;
            leftNode.next = curfront;
            curfront = leftNode;

        }
        leftfront.next = rightNode;
        finalfront.next = rightNext;
        // rightNode.next=rightNext;

        return;

    }

}