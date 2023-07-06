/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0;
  while (i < bits.length) {
    if (bits[i] == 1) {
      i = i + 2;
      if(i==bits.length){
          return false
      }
    } else {
      i = i + 1;
    }
  }

  return true;
};
