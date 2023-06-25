/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map=new Map();
    for(let n of tasks){
        if(!map.has(n)){
            map.set(n,1)
        }
        else{
            map.set(n,map.get(n)+1)
        }
    }
    let result=0;
    for(let [t,v] of map){
        if(v%3==0){
            result+=v/3
        }
        else if(v==1){
            return -1;

        }
        else if(v%3==1){
            result+=Math.floor(v/3)
            result=result+1
        }
        else if(v%3==2){
            result+=Math.floor(v/3)
            result=result+1
        }

        //console.log([t,v])
    }
    return result;
    
    
};