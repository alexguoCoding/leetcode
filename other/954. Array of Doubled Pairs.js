/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    let map = new Map();
    let l = arr.length;
  
  
    let sorted = arr.sort((a, b) => {
      if (Math.abs(a) - Math.abs(b) <= 0) {
        return -1;
      } else {
        return 1;
      }
    });
   // console.log(sorted);
    for (let i = 0; i < l; i++) {
      map.set(sorted[i], map.get(sorted[i]) + 1 || 1);
    }
   // console.log(map)
    for (let i = 0; i < l; i++) {
  
      if ((!map.has(sorted[i])) || (!map.has(sorted[i] * 2))) {
         
        continue;
      }
  
      let temp1 = map.get(sorted[i]);
      if (temp1 == 1) {
        map.delete(sorted[i]);
      } else {
        map.set(sorted[i], temp1 - 1);
      }
      // console.log(sorted[i],sorted[i] * 2)
      let temp2 = map.get(sorted[i] * 2);
     // console.log(temp2)
      if (temp2 == 1) {
        map.delete(sorted[i] * 2);
        //console.log("a")
      } else {
        map.set(sorted[i] * 2, temp2 - 1);
      }
    }
  //  console.log(map)
    if(map.size>0){
        return false
  
    }
    return true;
  };
  