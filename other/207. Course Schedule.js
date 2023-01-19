/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let record=new Map();
    let visit=new Array(numCourses).fill(0);
    let result=0;
    for(let i=0;i<prerequisites.length;i++){
        if(!record.has(prerequisites[i][1])){
            record.set(prerequisites[i][1],[prerequisites[i][0]])
            //console.log(prerequisites[0])

        }
        else{
            let temp=record.get(prerequisites[i][1]);
            temp.push(prerequisites[i][0]);

           record.set(prerequisites[i][1],temp)
        }
        visit[prerequisites[i][0]]++;

    }
    let zeroin=[];
    console.log(visit)
   for(let i=0;i<visit.length;i++){
       if(visit[i]==0){
           zeroin.push(i)
           //result++;
       }
   }
   console.log(zeroin)
   while(zeroin.length!=0){
       result++;
       let tempnum=zeroin.shift();
       if(record.has(tempnum)&&record.get(tempnum).length>0){
           let temparray=record.get(tempnum);
           while(temparray.length>0){
               let tempv=temparray.shift()
               visit[tempv]--;
               if(visit[tempv]==0){
                   zeroin.push(tempv);

               }
           }
           
       }
       record.delete(tempnum)
   }
   
   return result==numCourses;


};