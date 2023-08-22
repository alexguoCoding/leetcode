/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let map = new Map();
  let l = 0;
  let result=0;
  for (let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], map.get(fruits[i]) + 1 || 1);
    while (map.size == 3) {
      if (map.get(fruits[l]) == 1) {
        map.delete(fruits[l]);
      } else {
        map.set(fruits[l], map.get(fruits[l]) - 1 );
      }
     
      l++;
     
    }
    let tempresult=0;
    for(let [a,b] of map){
tempresult+=b
    }

     result=Math.max(tempresult,result)

  }

  return result;
};
