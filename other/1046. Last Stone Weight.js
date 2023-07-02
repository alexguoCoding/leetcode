/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let MaxQueue=new MaxPriorityQueue({Priority:(x)=>x})
    for(let s of stones){
         MaxQueue.enqueue(s)

    }
    while(MaxQueue.size()!=1){
        let a=  MaxQueue.dequeue().element
         let b=  MaxQueue.dequeue().element
         let c=Math.abs(a-b)
          MaxQueue.enqueue(c)
    }



        let c=MaxQueue.dequeue().element
        if (c==0){
            return 0 
        }
        else{
            return c
        }
       


   
    
};