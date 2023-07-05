/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let lane1 = "qwertyuiopQWERTYUIOP";
  let lane2 = "asdfghjklASDFGHJKL";
  let lane3 = "zxcvbnmZXCVBNM";
  let map = new Map();
  for (let i of lane1) {
    map.set(i, 1);
  }
  for (let i of lane2) {
    map.set(i, 2);
  }
  for (let i of lane3) {
    map.set(i, 3);
  }
  let result = [];
  for (let c of words) {
    let lane = -1;
    let add = true;
    for (let a of c) {
     // console.log(a);
      if (lane == -1) {
        lane = map.get(a);
      } else {
        if (lane != map.get(a)) {
           // console.log(a+lane+' '+map.get(a))
          add = false;
          break;
        }
      }
      //console.log(lane)
    }
    
    if (add) {
      result.push(c);
    }
  }
  return result;
};