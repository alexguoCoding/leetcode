/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let l=new Array(n+1).fill(0).map(()=>new Array(2).fill(0))
    for(let [i,j] of trust){

        l[i][1]++
        l[j][0]++
        //console.log(l)
    }
   // console.log(l)
    for(let i=1;i<=n;i++){
        console.log(n-1)
        if(l[i][0]==n-1&&l[i][1]==0){
            return i

        }

    }
    return -1
    
};