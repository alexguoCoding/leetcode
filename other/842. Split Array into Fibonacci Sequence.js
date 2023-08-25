/**
 * @param {string} num
 * @return {number[]}
 */

var splitIntoFibonacci = function (num) {
    let c = [];
    let seq = [];
  
    backtrack(0, num, c, seq);
    return c;
  };
  
  let backtrack = function (start, num, c, seq) {
      if(seq.length>=3&&!test(seq)){
          return
  
      }
    if (start == num.length) {
      if (test(seq)) {
        c.length = 0; // Clear c array
        c.push(...seq); // Copy seq to c
      }
      return;
    }
  
    for (let i = start + 1; i <= num.length; i++) {
      let tempnum = num.substring(start, i);
      if (tempnum.length >= 2 && tempnum[0] == "0") {
        return;
      }
  
      let add = parseInt(tempnum);
      if (add > Math.pow(2, 31)) {
        return;
      }
  
      seq.push(add);
   
        backtrack(i, num, c, seq);
     
  
        seq.pop();
  
    }
  };
  
  let test = function (seq) {
    //console.log(seq)
    if (seq.length < 3) {
      return false;
    }
    for (let i = 2; i < seq.length; i++) {
      if (seq[i - 2] + seq[i - 1] != seq[i]) {
        return false;
      }
    }
    return true;
  };
  