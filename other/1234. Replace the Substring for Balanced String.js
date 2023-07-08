/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  let n = s.length;
  let partn = Math.floor(s.length / 4);
  let now = new Array(26).fill(0);
  let target = new Array(26).fill(partn);



  check = function () {
    if (
      target["Q".charCodeAt() - "A".charCodeAt()] <=0 &&
      target["W".charCodeAt() - "A".charCodeAt()] <=0 &&
      target["E".charCodeAt() - "A".charCodeAt()] <=0 &&
      target["R".charCodeAt() - "A".charCodeAt()] <=0
    ) {
      return true;
    }
    return false;
  };
  let min = Number.POSITIVE_INFINITY;
 // console.log(min)

  for (let r = 0; r < n; r++) {
    now[s[r].charCodeAt() - "A".charCodeAt()] += 1;
  }
   // console.log(now)
   // console.log(target)
  for (let r = 0; r < 26; r++) {
    target[r] = now[r]-target[r];
  }
  //console.log(target)
  if(check()){
    return 0
  }
  for (let r = 0,l=0; r < n; r++) {
    target[s[r].charCodeAt() - "A".charCodeAt()] -= 1;
    //console.log(target)
    while(check()&&l<=r){
        min= Math.min(min,r+1-l)
       // console.log(min)
        
        target[s[l].charCodeAt() - "A".charCodeAt()] += 1;
        l++;

    }
   
  }
  if(min== Number.POSITIVE_INFINITY){
    return 0
  }
  else{
    return min
  }
  //console.log(target)








 

};