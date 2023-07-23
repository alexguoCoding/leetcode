
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
    let result = "";
    while (a != 0 && b != 0) {
      if (a >= b + 2) {
        result = result + "aab";
        a = a - 2;
        b--;
      } else if (b >= a + 2) {
        result = result + "bba";
        b = b - 2;
        a--;
      } else if (a >= b) {
        result = result + "a";
        a = a - 1;
      } else if (b >= a) {
        result = result + "b";
        b = b - 1;
      }
    }
    console.log(a,b)
    while (a == 0 && b != 0) {
      result = result + "b";
      b--;
    }
     console.log(a,b)
    while (b == 0 && a != 0) {
       console.log(a)
      result = result + "a";
      a=a-1;
    }
    return result;
  };
  