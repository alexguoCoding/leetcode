var ProductOfNumbers = function() {
    this.arr=[]
    
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    let arr=this.arr
    if(arr.length==0){
         arr.unshift(num)
    }
    else{
        for(let i=0;i<arr.length;i++){
            arr[i]=arr[i]*num
            
        }
        arr.unshift(num)
    }
    

    
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    return this.arr[k-1]
    
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */