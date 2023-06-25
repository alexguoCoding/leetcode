/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let num=Array(26).fill(0);
   
    for(let c of magazine){
       num[c.charCodeAt()-'a'.charCodeAt()]++
    }
    console.log(num)
    for(let c of ransomNote ){
       num[c.charCodeAt()-'a'.charCodeAt()]--
        if( num[c.charCodeAt()-'a'.charCodeAt()]==-1){
            return false;
        }
    }
    return true;

};