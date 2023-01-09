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
         class save{
            ListNode cur;
            int var;
                save(ListNode cur,int var){
                this.cur=cur;
                this.var=var;
                
            }
        }
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<save> minheap=new PriorityQueue<>((a,b)->(a.var-b.var));
       for(int i=0;i<lists.length;i++){
           if(lists[i]!=null){
              
               
               ListNode temp=lists[i];
               while(temp!=null){
                   save savetemp=new  save(temp,temp.val);
                   minheap.add(savetemp);
                   //System.out.println(savetemp.var);
                   temp=temp.next;
               }               
           }
           

         
       }
        ListNode result=new  ListNode(-10);
        ListNode currentnode=result;
        //System.out.println(minheap.size());
        while(minheap.size()!=0){
           save temp=minheap.poll();
            currentnode.next=temp.cur;
            currentnode=currentnode.next;
            currentnode.next=null;
            // System.out.println(minheap.size());
        }

        
   
        

        return result.next;
        
    }
}