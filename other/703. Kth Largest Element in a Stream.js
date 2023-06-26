/**
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function(k, nums) {
    this.Minheap=new MinPriorityQueue({Priority: (x)=>x})
    this.k=k;
    
    for(let i of nums){
        this.Minheap.enqueue(i) 
       console.log(i)

    }
 // console.log(this.Minheap.size())
    while(this.Minheap.size()>this.k){
        this.Minheap.dequeue()
    }
    console.log(this.Minheap.size())

   
   
};


/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.Minheap.enqueue(val) 
   if(this.Minheap.size()>this.k){
       this.Minheap.dequeue()

   }

   if(this.Minheap.front()!=null){
       return this.Minheap.front().element
   }
   else{
       return null
   }



    
     return this.Minheap.front().element
 
