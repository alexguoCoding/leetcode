/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
    let countin=new Array(n+1).fill(0);
    let map=new Map()
    let count=0;
    for(let i=0;i<relations.length;i++){
        if(!map.has(relations[i][0])){
            let temparr=[relations[i][1]]
            map.set(relations[i][0],temparr)
        }
        else{
            let temparr=map.get(relations[i][0])
            temparr.push(relations[i][1])
            map.set(relations[i][0],temparr)
        }
         countin[relations[i][1]]++;

    }
    let zeroIn=[];
    for(let i=1;i<=n;i++){
        if(countin[i]==0){
            zeroIn.push(i)
        }
    }
    console.log(zeroIn)
    
    while(zeroIn.length>0){
        let templength=zeroIn.length
        count++;
        while(templength>0){
                let temp=zeroIn.shift();
                if(map.has(temp)){
                    let temparr=map.get(temp)
                    for(let e of temparr){
                        countin[e]--;
                        if(countin[e]==0){
                            zeroIn.push(e)
                            
                        }
                    }
                }
                map.delete(temp)

            templength--;
        }

    }
    for(let i=1;i<=n;i++){
        if(countin[i]==1){
            return -1;
        }
    }
    if(count==0||zeroIn.length){
        return -1

    }
    return count;

};