/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let Origin=[...score];

     score=score.sort((a,b)=>b-a)
     let set=new Map();

     let rank=1;
    
     for(let i=0;i<score.length;i++){
         set.set(score[i],rank)
         rank++;
         
     }
    // console.log(set)

     

    for(let i=0;i<score.length;i++){
        let temprank=set.get(Origin[i])
        Origin[i]=temprank
        if(temprank==1){
            Origin[i]="Gold Medal"
        }
        else if(temprank==2){
            Origin[i]="Silver Medal"
        }
        else if(temprank==3){
            Origin[i]="Bronze Medal"
        }
        else{
            Origin[i]=temprank+""
        }


         
     }
     return Origin;

     
};