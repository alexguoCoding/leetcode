var StockSpanner = function() {
    pos=0
    minstack=[]
   
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  // console.log(minstack)
      pos++;
   if(minstack.length==0||minstack[minstack.length-1][0]>price){
       minstack.push([price,pos]) 
       return 1
   }
   let pre=0
   while(minstack.length!=0&&minstack[minstack.length-1][0]<=price){
      
       minstack.pop()
      

   } 
   if(minstack.length-1>=0){
pre=minstack[minstack.length-1][1]
 
   }
   else{
        pre=0

   }
  
 
   minstack.push([price,pos])

   return pos-pre
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/