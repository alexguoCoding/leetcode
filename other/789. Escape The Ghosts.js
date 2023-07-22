/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
   let you=Math.abs(target[0]-0)+Math.abs(target[1]-0)
   
   for(let i=0;i<ghosts.length;i++){
       let temp=Math.abs(target[0]-ghosts[i][0])+Math.abs(target[1]-ghosts[i][1])
       //console.log(temp,you)
       if(temp<=you){
           return false

       }
       
   }
   return true
    