/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let l=edges.length+1
    let indegree=new Array(l+1).fill(0)
    for(let [i,j] of edges){
        indegree[i]++
        indegree[j]++
    }
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==edges.length){
            return i
        }
    }
    
};