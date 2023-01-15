/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.result=new Array(n).fill(-1);
     this.ptr=0;
    
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.result[idKey-1]=value;
    let display=[]
     console.log(this.ptr)
     //console.log(this.ptr!=idKey-1)

    if(this.ptr!=idKey-1){
        return [];
    }
    for(let i=idKey-1;i<this.result.length;i++){
        if(this.result[i]==-1){
            break;

        }
        display.push(this.result[i])
        this.ptr=i+1;

    }
   // console.log(ptr)
    return  display;
    
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */