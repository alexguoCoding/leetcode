/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let C = 0;
    let result = 0;
    for (let i = 0; i < 32; i++) {
      let A = (a >> i) & 1;
      let B = (b >> i) & 1;
     // console.log(A,B,C)
      if (A && B) {
        if (C == 0) {
          C = 1;
          // result = result | (1 << i);
        } else {
          result = result | (1 << i);
        }
      } else if (A  || B) {
        if (C == 0) {
          
          result = result | (1 << i);
        } else {
    
          
        }
  
      }
      else{
          if (C == 1) {
          
          result = result | (1 << i);
          C=0
        } else {
    
          
        }
        
         
      }
  
      
    }
    return result
  };
  