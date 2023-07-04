/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head=head
    
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let pre=this.head
    let count=1;
    let result=0;
    while(pre!=null){
        let ran=Math.floor(Math.random() * count)
        count++
        //console.log(ran)
        if(ran==0){
            result=pre.val

        }
        


        pre=pre.next
    }
    return result
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */