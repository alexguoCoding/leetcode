/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    s=s.split("");
    let add=true;
    let map=new Map();
    let bigestodd=1;
    //console.log(4/3)
    for(let i=0;i<s.length;i++){
        map.set(s[i],map.get(s[i])+1||1);
        
    }
    //console.log(map)
    let count=0;
    for(let[key,value] of map){
        count=Math.floor(value/2)*2+count;

           if(count%2==0&&value%2==1){
               count++
           }
 
        
        //console.log(value)
    }

    return count;
};