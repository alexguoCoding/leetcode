/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function (arr) {
    l = arr.length;
    let record = new Array(4).fill(-1);
    let prehour = -1;
    let premin = -1;
    for (let i = 0; i < l; i++) {
      record[i] = 1;
      for (let j = 0; j < l; j++) {
        if (record[j] == 1) {
          continue;
        }
        record[j] = 1;
        for (let k = 0; k < l; k++) {
          if (record[k] == 1) {
            continue;
          }
          record[k] = 1;
          for (let m = 0; m < l; m++) {
            if (record[m] == 1) {
              continue;
            }
  
            let hour = arr[i] + "" + arr[j];
            let min = arr[k] + "" + arr[m];
            if (checkHour(hour) && checkMin(min)) {
              if (hour > prehour) {
                   prehour = hour;
              
                 
                  premin = min;
  
              }
              else if(hour == prehour){
                  if(premin<min){
                       premin = min;
  
                  }
  
              }
            }
          }
          record[k] = 0;
        }
        record[j] = 0;
      }
      record[i] = 0;
    }
    if (prehour != -1 && premin != -1) {
      return prehour + ":" + premin;
    }
    return "";
  };
  
  var checkHour = function (arr) {
    if (arr >= 0 && arr <= 23) {
      return true;
    }
    return false;
  };
  var checkMin = function (arr) {
    if (arr >= 0 && arr <= 59) {
      return true;
    }
    return false;
  };
  