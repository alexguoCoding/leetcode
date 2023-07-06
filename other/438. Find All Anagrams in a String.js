/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(p, s) {
    let c1=new Array(26).fill(0)
    for(let c of s){
        c1[c.charCodeAt()-'a'.charCodeAt()]++

    }
    let s1=c1.toString()
    let result=[]
    //console.log(s1)
    let c2=new Array(26).fill(0)
    for(let r=0,l=0;r<p.length;r++){
        c2[p[r].charCodeAt()-'a'.charCodeAt()]++
        while(r-l+1>s.length){
             c2[p[l].charCodeAt()-'a'.charCodeAt()]--
            l++;
        }
        let s2=c2.toString()
        if(s2===s1){
            result.push(l)
           
        }

    }
    return result
    
};