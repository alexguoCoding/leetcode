/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    let max = 0;
    let temp = 1;
    let equal = false;
    let bigger = false;
    let smaller = false;
   
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
         //console.log('a')
        if (smaller) {
          temp++;
       
        } else if (equal) {
          temp = 1;
        } else {
          //console.log('a')
          temp = 1;
         
  
        }
        max = Math.max(max, temp);
  
        equal = false;
        smaller = false;
        bigger = true;
      } else if (arr[i] == arr[i - 1]) {
        equal = true;
        smaller = false;
        bigger = false;
        temp = 0;
        max = Math.max(max, temp);
      } else {
        if (bigger) {
          temp++;
  
          max = Math.max(max, temp);
        } else if (equal) {
          temp = 1;
        } else {
          temp = 1;
          max = Math.max(max, temp);
  
        }
        equal = false;
        smaller = true;
        bigger = false;
      }
      max = Math.max(max, temp);
     // console.log(arr[i], temp);
    }
    return max + 1;
  };
  