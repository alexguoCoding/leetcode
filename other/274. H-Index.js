/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
 
    citations=citations.sort((a,b)=>a-b)
   // console.log(citations)
    let p=0
    
    for(let i=citations.length-1;i>=0;i--){
        
        if(citations[i]<=p){
            return p
        }
        p++
    }
    return p



    
};