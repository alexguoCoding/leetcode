/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let set = new Map();
  let l = s.length;
  let templ = 10;
  let start = 0;
  let result = [];
  while (templ <= l + 1) {
    let tempStr = s.substring(start, templ);
    if (set.has(tempStr)) {
      if (set.get(tempStr) == 0) {
        result.push(tempStr);
        set.set(tempStr, 1);
      }
    } else {
      set.set(tempStr, 0);
    }
    start++;
    templ++;
  }
  return result;
};
