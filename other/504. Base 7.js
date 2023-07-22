/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let result = "";
    let sigh = false;
    if (num < 0) {
      sigh = true;
      num=Math.abs(num)
    }
    while (num != 0) {
      let n = num % 7;
      result = n + result;
      num = Math.floor(num / 7);
      //console.log(num);
    }
     if(result.length==0){
  result="0"
     }
    if(sigh){
        result="-"+result
    }
    return result;
  };
  