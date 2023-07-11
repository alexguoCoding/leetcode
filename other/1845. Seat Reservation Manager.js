/**
 * @param {number} n
 */
var SeatManager = function(n) {
    minQueue=new PriorityQueue({compare:(a,b)=>{
        return a-b
    }})
    for(let i =1;i<=n;i++){
        minQueue.enqueue(i)

    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return  minQueue.dequeue()
    
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    minQueue.enqueue(seatNumber)
    
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */