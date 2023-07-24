/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    let result = [];
    let set = new Set();
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 30; j++) {
        let xpow = Math.pow(x, i);
        let ypow = Math.pow(y, j);
        let res = xpow + ypow;
        if (res <= bound) {
          if (!set.has(res)) {
            result.push(res);
            set.add(res);
          }
    
        }
      }
    }
    return result;
  };
  