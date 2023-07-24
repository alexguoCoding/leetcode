/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let l1 = strs.length;
    let l2 = strs[0].length;
    let count=0
  
    for (let j = 0; j < l2; j++) {
      let tempstr = "";
      for (let i = 0; i < l1; i++) {
        tempstr += strs[i][j];
      }
      let temp=tempstr.split("")
      temp=temp.sort()
      temp=temp.join("")
      if(temp!=tempstr){
          count++
  
      }
    }
    return count
  };
  