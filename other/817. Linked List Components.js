/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    let map=new Map()
    let set=new Set()
    let node=head
    while(node.next!=null){
        map.set(node.val,node.next.val)
        node=node.next
    }
      for(let i=0;i<nums.length;i++){
          set.add(nums[i])
      }
    let result=nums.length
    for(let i=0;i<nums.length;i++){
        
        if(set.has(map.get(nums[i]))){
            
            result--
        }
    }
    return result


};