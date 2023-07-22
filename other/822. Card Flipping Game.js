/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    let sorted=ages.sort((a,b)=>b-a);
    console.log(sorted);
    let al = ages.length;
    let count = 0;
    let map = new Map();
    for (let i of ages) {
      map.set(i, map.get(i) + 1 || 1);
    }
    for (let i = 120; i >= 15; i--) {
      if (map.has(i)) {
        let n=map.get(i)
        while(n!=0){
          n=n-1
          count+=(n)
         
        }
       
      
      }
    }
  
    for (let l = 0; l < al; l++) {
      let r = al - 1;
  
      while (ages[r] <= 0.5 * ages[l] + 7) {
        r--;
      }
      if (r > l) {
        count = count + (r - l);
      }
    }
    console.log();
    return count;
  };
  