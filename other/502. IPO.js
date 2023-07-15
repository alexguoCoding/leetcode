/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let save=[]
 
    let cmax=0
    for(let i=0;i<profits.length;i++){
        save.push([capital[i],profits[i]])
        cmax=Math.max(cmax,capital[i])
    }
    maxqueue=new PriorityQueue({compare:(a,b)=>{
      
            return b[1]-a[1]
 
    }})

  
    let j=0
    save=save.sort((a,b)=>a[0]-b[0])
   // console.log(save)
      for(let i=0;i<k;i++){
          while(j<profits.length&&save[j][0]<=w){
              maxqueue.enqueue(save[j])
              j++
              //console.log(j)
          }
          if(maxqueue.size()>0){
                        p=maxqueue.dequeue()[1]
          w=w+p

          }



          


      }
      return w
    
};