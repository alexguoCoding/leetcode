/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result=""
    while(columnNumber!=0){
        columnNumber--
        let n=columnNumber%26
        let c=String.fromCharCode(n+'A'.charCodeAt())
        result=c+result
        columnNumber=Math.floor(columnNumber/26)
        
    }
    return result
};