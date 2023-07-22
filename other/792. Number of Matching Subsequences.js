/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    let wl = words.length;
    let sl = s.length;
    let pointers = new Array(wl).fill(0);
  
    for (let i = 0; i < sl; i++) {
      for (let j = 0; j < wl; j++) {
        if (s[i] == words[j][pointers[j]]) {
          pointers[j] = pointers[j] + 1;
        }
      }
    }
  
    let count=0
      for (let j = 0; j < wl; j++) {
        if (pointers[j] == words[j].length) {
          count++
        }
      }
    return count
  };