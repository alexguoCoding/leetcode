/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
    this.encoding=encoding
   this.amount=0;
   this.count=[]
   this.nums=[]
    for(let i=0;i< this.encoding.length;i=i+2){
        if(this.encoding[i]!=0){
         this.count.push(this.encoding[i])
          this.nums.push(this.encoding[i+1])
        }

       // this.encoding[i]= this.encoding[i-2]+this.encoding[i]


    }
    for(let i=1;i< this.count.length;i=i+1){

 this.count[i]=this.count[i]+this.count[i-1]
          
        }

       // this.encoding[i]= this.encoding[i-2]+this.encoding[i]


    
    console.log(this.count)
  console.log(this.nums)

};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    this.amount+=n;
    if( this.amount>this.count[this.count.length-1]){
        return -1
    }
    for(let i=0;i< this.count.length;i=i+1){
        if( this.amount<=this.count[i]){
            return  this.nums[i]
        }


    }
   

};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */