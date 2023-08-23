/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let str=""
    for(let w of words ){
      str=str+""+w[0]
    }
    if(str==s){
      return true
    }
    return false
      
  };