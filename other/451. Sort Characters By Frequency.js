[]/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map=new Map();
    for(let c of s){
        console.log(c)
        if(map.has(c)){
             map.set(c, map.get(c)+1)

        }
        else{
            map.set(c,1)

        }
    }
    console.log(map.get('t'))
    let MaxQueue=new MaxPriorityQueue({priority:([c,f])=>f})
    for(let [c,f] of map){
        //console.log([c,f])
        MaxQueue.enqueue([c,f])
    }
    let result=""
    while(MaxQueue.size()!=0){
        let [c,f]=MaxQueue.dequeue().element
        while(f>0){
            result+=c
            f--
        }

    }
    return result


    
};