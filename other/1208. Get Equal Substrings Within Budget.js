/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {

    let getdiff=function(a,b){
        return Math.abs(a.charCodeAt()-b.charCodeAt())

    }

    let result=0;
    for(let l=0,r=0;r<s.length;r++){
        while(maxCost-getdiff(s[r],t[r])<0){
            maxCost+=getdiff(s[l],t[l])
            l++


        }
         maxCost-=getdiff(s[r],t[r])
         result=Math.max(Math.abs(r-l+1),result)

    }
    return result

    
};