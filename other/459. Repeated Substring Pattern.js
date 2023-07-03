/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let a=s+s
    a=a.substring(1,a.length-1)
    console.log(a)
    if(a.includes(s)){
        return true
    }
    else{
        return false
    }
    
};