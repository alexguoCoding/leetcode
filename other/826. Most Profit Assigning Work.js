/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let sum=0;
    let l=worker.length-1
    let count=0;
    worker.sort((a,b)=>a-b)
    let map=new Map()
    let sortsPro=new Array(profit.length)
    for(let i=0;i<profit.length;i++){
sortsPro[i]=[profit[i],difficulty[i]]
    }
    
sortsPro.sort((a,b)=>(a[0]-b[0]))
//console.log(sortsPro)
    for(let i=profit.length-1;i>=0;i--){
       // console.log(sortsPro[i][1],worker[l])
        while(l>=0&&sortsPro[i][1]<=worker[l]){
            
            l--
            sum=sum+sortsPro[i][0]
            if(l<0){
                break;
            }

        }
    }
    return sum;
};