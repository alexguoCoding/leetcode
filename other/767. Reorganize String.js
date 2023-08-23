/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let map = new Map();
    let maxN = Number.NEGATIVE_INFINITY;
    let maxc = s[0];
    console.log(maxN);
    for (let c of s) {
      map.set(c, map.get(c) + 1 || 1);
      if (maxN < map.get(c)) {
        maxN = map.get(c);
        maxc = c;
      }
    }
  ;
  
    if (Math.ceil(s.length / 2) < maxN) {
      return "";
    }
    let notused = [];
    for (let j=0;j<maxN;j++ ) {
      
        notused.unshift(maxc);
      
    }
    for (let [a,b] of map) {
      if (a != maxc) {
          for(let j=0;j<b;j++){
              notused.push(a);
          }
       
      }
    }
  
    console.log(notused)
    let i = 0;
    let result = new Array(s.length).fill(0);
  let time=true
    for (; i < s.length; i += 2) {
      result[i] = notused.shift();
      if(i+2>=s.length&&time==true){
          i=-1;
          time=false
      }
      console.log(result)
  
    }
   //console.log(result)
  
    str = "";
  
    for (let i = 0; i < result.length; i++) {
      str = str + "" + result[i];
    }
    return str;
  
    console.log(result);
  };
  