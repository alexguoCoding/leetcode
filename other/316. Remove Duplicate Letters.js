/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let map = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    pos = s[i].charCodeAt() - "a".charCodeAt();
    map[pos]++;
  }
  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (map[i] >= 1) {
      count++;
    }
  }
  let stack = [];

  for (let i = 0; i < s.length; i++) {
      if(stack.includes(s[i])){
        map[s[i].charCodeAt() - "a".charCodeAt()]-- 
          continue
      }
    while (
      stack.length > 0 &&
      map[stack[stack.length - 1].charCodeAt() - "a".charCodeAt()] > 1 &&
      stack[stack.length - 1] >= s[i]
    ) {
      pos = stack[stack.length - 1].charCodeAt() - "a".charCodeAt();
      map[pos]--;
      stack.pop();
    }

    // if (map[s[i].charCodeAt() - "a".charCodeAt()] >= 1) {
      stack.push(s[i]);
    //   map[s[i].charCodeAt() - "a".charCodeAt()] --;
    // }
  }
  stack = stack.slice(0, count);
  return stack.join("");
};
