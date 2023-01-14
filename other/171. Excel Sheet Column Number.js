/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    columnTitle=columnTitle.split("");
    let sum=0;
    for(let i=0;i<columnTitle.length;i++){
       // console.log(columnTitle[i]-"A")
        sum=sum*26+columnTitle[i].charCodeAt()-'A'.charCodeAt()+1

    }
    return sum;
};