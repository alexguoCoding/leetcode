/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let save=new Array(60).fill(0);
    let map=new Map();
    let result=0;
    for(let i=0;i<time.length;i++){
        let cur=time[i]%60;
        let tar=(60-cur)%60;
        if(map.has(tar)){
            result+=map.get(tar);
           

        }
        if(!map.has(cur)){
            map.set(cur,1)
        }
        else{
            map.set(cur,map.get(cur)+1)
        }

  

    


        
         
        
    }
    return result;

};