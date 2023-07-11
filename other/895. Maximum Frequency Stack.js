var FreqStack = function() {
     maxqueue=new PriorityQueue({compare: (a, b) => {
         if(a[0]==b[0]){
              return b[1]-a[1]

         }
         return b[0]-a[0]
        

     }})

    time=0
     map=new Map()
    
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if(!map.has(val)){
        map.set(val,1)
    }
    else{
         map.set(val,map.get(val)+1)
    }
    maxqueue.enqueue([map.get(val),time,val])
    time++;
    //  12221

    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let [i,j,k]=maxqueue.dequeue()
     map.set(k,map.get(k)-1)


        return k

};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */