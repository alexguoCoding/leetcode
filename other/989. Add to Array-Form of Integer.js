/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let i = num.length - 1;
      let result = [];
      let add = 0;
      while (k != 0 || i >= 0) {
        console.log(i)
        val = (k % 10)  + add;
        if(i>=0){
          val +=num[i];
        }
        add=0
        if (val >= 10) {
          
          result.unshift(Math.floor(val % 10));
         
          add = 1;
        } else {
          result.unshift(val);
        }
     
    
        k = Math.floor(k / 10);
        i--;
      }
      if(add==1){
         result.unshift(1);
      }
    
      //console.log(result);
      return result;
    };
    