/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let cur = 0;
    let result = 0;
  
  
    for (let i = 0; i < seats.length; i++) {
      if (seats[i] == 0) {
        cur++;
      } else {
          //console.log(i+" "+cur)
     
        result = Math.max(result, Math.ceil(cur / 2));
        cur = 0;
      }
    }
    let j = 0;
    cur = 0;
    while (seats[j] == 0) {
      cur++;
      j++;
    }
    result = Math.max(result, cur);
    j = seats.length - 1;
    cur = 0;
    while (seats[j] == 0) {
      cur++;
      j--;
    }
    result = Math.max(result, cur);
    return result;
  };
  