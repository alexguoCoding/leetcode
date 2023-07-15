/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let set = new Set();
  let map = new Map();
  let array = new Array(100).fill(0);
  let temp = new Array(100).fill(0);
  for (let c of t) {
    set.add(c);
    array[c.charCodeAt() - "A".charCodeAt()] += 1;
  }

  //console.log(ansstr);

  let left = 0;
  let result = "";
  let maxlen = Number.POSITIVE_INFINITY;
  let check=function(target,temp){
    for(let i=0;i<70;i++){
      if(target[i]>temp[i]){
        return false
      }
     

    }
     return true

  }

  for (let right = 0; right < s.length; right++) {
    if (set.has(s[right])) {
      temp[s[right].charCodeAt() - "A".charCodeAt()] += 1;
      if(!map.has(s[right])){
          map.set(s[right],1)
      }
     else{
          map.set(s[right],map.get(s[right])+1)
      }
     // let tempstr = temp.toString();
       //console.log(tempstr)
      while (check(array,temp)&&left<=right) {
        //console.log(tempstr)
       // console.log(map.get(s[left]))
        if (maxlen > right - left + 1) {
          maxlen = right - left + 1;
          result = s.substring(left, right+1);
        }

        if (set.has(s[left])) {
            if(map.get(s[left])==1){
                temp[s[left].charCodeAt() - "A".charCodeAt()] = 0;
                map.delete(s[left])
            }
            else{
                map.set(s[left],map.get(s[left])-1)
                temp[s[left].charCodeAt() - "A".charCodeAt()] -= 1;
            }
      
        }
        if( temp[s[left].charCodeAt() - "A".charCodeAt()]< array[s[left].charCodeAt() - "A".charCodeAt()]){
          left++;
          break;
        }

       // tempstr=temp.toString()
        left++;
      }
    }
  }
  return result;
};