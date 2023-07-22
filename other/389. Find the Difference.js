/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr=new Array(26).fill(0)
    for(let c of s){
        let pos=c.charCodeAt()-'a'.charCodeAt()
        arr[pos]++
    }
    for(let c of t){
        let pos=c.charCodeAt()-'a'.charCodeAt()
        arr[pos]--
    }
    for(let i=0;i<26;i++){
        if(arr[i]==-1){
           return String.fromCharCode(i+'a'.charCodeAt())
        }

    }
    return ""

};