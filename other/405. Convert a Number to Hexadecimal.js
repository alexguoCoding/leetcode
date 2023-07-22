/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num == 0) return "0";
  let result=""
  while(num!=0){
      let temp=num&15
      if(temp>9){
          let char=String.fromCharCode(temp-10+'a'.charCodeAt())
          result=char+result
      }
      else{
          result=temp+result

      }
      
     num >>>= 4;
  }
  return result
  
};