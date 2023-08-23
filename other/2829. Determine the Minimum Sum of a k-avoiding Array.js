/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
    let t=1;
    let tempt=0;
    let result=[]
    let set=new Set()
    
    while(result.length<n&&t<k){
      if(!set.has(t)){
        result.push(t)
        set.add(k-t)
         
         }
      t++;
      
    }
    tempt=set.size
    while(tempt<n){
    result.push(t)
      t++;
      tempt++
    }
    let res=0
    for(let i of result){
      res+=i
    }
    return res
  
  
    
    