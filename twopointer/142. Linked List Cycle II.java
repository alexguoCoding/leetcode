/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        Map<ListNode,Integer> map=new HashMap<>();
        ListNode temp=head;
        int pos=0;
        while(temp!=null){
            if(map.containsKey(temp)==true){
                return temp;
            }
            else{
                map.put(temp,pos);
                ++pos;                
            }
            temp=temp.next;
            

            
        }
        return temp;
        
    }
}