
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let visit=new Array(numCourses).fill(0);
    let record=new Map();
    let result=[]
    for(let i=0;i<prerequisites.length;i++){
        if(!record.has(prerequisites[i][1])){
            let temparr=[prerequisites[i][0]]
            record.set(prerequisites[i][1],temparr)
        }
        else{
            let temparr=record.get(prerequisites[i][1])
            temparr.push(prerequisites[i][0]);
             record.set(prerequisites[i][1],temparr)
        }
        visit[prerequisites[i][0]]++;
    }
   // console.log(visit)
    let zeroinput=[]
    for(let i=0;i<visit.length;i++){
        if(visit[i]==0){
            zeroinput.push(i)
        }
    }
    console.log(zeroinput)
    while(zeroinput.length!=0){
        let tempzero=zeroinput.shift();
        result.push(tempzero)
        if(record.has(tempzero)){
            let temparr=record.get(tempzero)
            for(let e of temparr){
                visit[e]--;
                if( visit[e]==0){
                    zeroinput.push(e)
                }
            }
            record.delete(tempzero)
        }

    }
    return result.length==numCourses?result:[]
    
    
};